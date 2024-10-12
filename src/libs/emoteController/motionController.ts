import { VRM } from '@pixiv/three-vrm';
import { AnimationAction, AnimationClip, AnimationMixer, LoopOnce, LoopRepeat } from 'three';

import { loadMixamoAnimation } from '@/libs/FBXAnimation/loadMixamoAnimation';
import { loadVMDAnimation } from '@/libs/VMDAnimation/loadVMDAnimation';
import IKHandler from '@/libs/VMDAnimation/vrm-ik-handler';
import VRMIKHandler from '@/libs/VMDAnimation/vrm-ik-handler';
import { loadVRMAnimation } from '@/libs/VRMAnimation/loadVRMAnimation';

import { MotionPresetName, motionPresetMap } from './motionPresetMap';
import { MotionFileType } from './type';

export class MotionController {
  private vrm: VRM;
  private mixer: AnimationMixer;
  private currentAction?: AnimationAction;
  private nextAction?: AnimationAction;
  private mixDuration: number = 0.5; // 混合持续时间
  private currentClip?: AnimationClip;
  private ikHandler: VRMIKHandler;
  private preloadedMotions = new Map<string, AnimationClip>();

  constructor(vrm: VRM) {
    this.vrm = vrm;
    this.mixer = new AnimationMixer(vrm.scene);
    this.ikHandler = IKHandler.get(vrm);
    this.currentAction = undefined;
    this.currentClip = undefined;
  }

  public async preloadMotion(motion: MotionPresetName) {
    const { type, url } = this.getMotionInfo(motion);
    await this.preloadMotionUrl(type, url);
  }

  public async preloadMotionUrl(fileType: MotionFileType, url: string) {
    if (!this.preloadedMotions.has(url)) {
      const clip = await this.loadMotionClip(fileType, url);
      if (clip) {
        this.preloadedMotions.set(url, clip);
      }
    }
  }

  /**
   * 目前都是 Mixamo 的 FBX 文件
   * @param motion
   */
  public playMotion(motion: MotionPresetName, loop: boolean) {
    const { type, url } = this.getMotionInfo(motion);
    if (type && url) this.playMotionUrl(type, url, loop);
  }

  private getMotionInfo(motion: MotionPresetName) {
    return motionPresetMap[motion] || motionPresetMap.idle;
  }

  public async playMotionUrl(
    fileType: MotionFileType,
    url: string,
    loop: boolean = true, // 默认循环播放
  ): Promise<void> {
    this.stopMotion();

    let clip: AnimationClip | undefined;

    if (this.preloadedMotions.has(url)) {
      clip = this.preloadedMotions.get(url);
    } else {
      clip = await this.loadMotionClip(fileType, url);
    }

    if (!clip) {
      console.error(`无法加载动作: ${url}`);
      return;
    }

    const nextAction = this.mixer.clipAction(clip);
    nextAction.setLoop(loop ? LoopRepeat : LoopOnce, loop ? Infinity : 1);

    if (this.currentAction) {
      // 设置下一个动作
      this.nextAction = nextAction;
      // 开始混合
      this.currentAction.crossFadeTo(this.nextAction, this.mixDuration, true);

      this.nextAction.play().reset();

      // 如果 finished 属性不存在，回退到使用 setTimeout
      setTimeout(() => {
        if (this.currentAction) {
          this.currentAction.stop();
          this.currentAction = this.nextAction;
          this.nextAction = undefined;
        }
      }, this.mixDuration * 1000);
    } else {
      // 如果是第一个动作,直接播放
      this.currentAction = nextAction;
      this.currentAction.play();
    }

    this.currentClip = clip;
  }

  private async loadMotionClip(
    fileType: MotionFileType,
    url: string,
  ): Promise<AnimationClip | undefined> {
    switch (fileType) {
      case 'vmd':
        return await this.loadVMD(url);
      case 'fbx':
        return await this.loadFBX(url);
      case 'vrma':
        return await this.loadVRMA(url);
      default:
        throw new Error('不支持的文件格式');
    }
  }

  private async loadVMD(url: string): Promise<AnimationClip | undefined> {
    return await loadVMDAnimation(url, this.vrm);
  }

  private async loadFBX(url: string): Promise<AnimationClip | undefined> {
    return await loadMixamoAnimation(url, this.vrm);
  }

  private async loadVRMA(url: string): Promise<AnimationClip | undefined> {
    return await loadVRMAnimation(url, this.vrm);
  }

  public stopMotion(): void {
    this.mixer.stopAllAction();
    if (this.currentClip) {
      this.mixer.uncacheAction(this.currentClip);
      this.mixer.uncacheClip(this.currentClip);
      this.currentAction = undefined;
    }

    this.ikHandler.disableAll();

    if (this.currentAction) {
      this.currentAction.stop();
      this.currentClip = undefined;
    }
  }

  public update(delta: number): void {
    this.mixer.update(delta);
    this.vrm.update(delta);
    this.ikHandler.update();
  }
}

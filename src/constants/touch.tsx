import { VRMExpressionPresetName } from '@pixiv/three-vrm';

import { GenderEnum } from '@/types/agent';
import { MotionAnimation, TouchActionConfig, TouchAreaEnum } from '@/types/touch';

export const DEFAULT_TOUCH_ACTION_CONFIG_FEMALE: TouchActionConfig = {
  [TouchAreaEnum.Head]: [
    {
      emotion: VRMExpressionPresetName.Happy,
      text: 'touch.femaleAction.headAction.happyA',
    },
    {
      emotion: VRMExpressionPresetName.Happy,
      text: 'touch.femaleAction.headAction.happyB',
    },
    {
      emotion: VRMExpressionPresetName.Happy,
      text: 'touch.femaleAction.headAction.happyC',
    },
    {
      emotion: VRMExpressionPresetName.Happy,
      text: 'touch.femaleAction.headAction.happyD',
    },
    {
      emotion: VRMExpressionPresetName.Angry,
      text: 'touch.femaleAction.headAction.angryA',
    },
    {
      emotion: VRMExpressionPresetName.Angry,
      text: 'touch.femaleAction.headAction.angryB',
    },
  ],
  [TouchAreaEnum.Arm]: [
    {
      emotion: VRMExpressionPresetName.Happy,
      text: 'touch.femaleAction.armAction.happyA',
    },
    {
      emotion: VRMExpressionPresetName.Relaxed,
      text: 'touch.femaleAction.armAction.relaxedA',
    },
    {
      emotion: VRMExpressionPresetName.Happy,
      text: 'touch.femaleAction.armAction.happyB',
    },
  ],
  [TouchAreaEnum.Leg]: [
    {
      emotion: VRMExpressionPresetName.Surprised,
      text: 'touch.femaleAction.legAction.surprisedA',
    },
    {
      emotion: VRMExpressionPresetName.Angry,
      text: 'touch.femaleAction.legAction.angryA',
    },
    {
      emotion: VRMExpressionPresetName.Angry,
      text: 'touch.femaleAction.legAction.angryB',
    },
    {
      emotion: VRMExpressionPresetName.Angry,
      text: 'touch.femaleAction.legAction.angryC',
    },
  ],
  [TouchAreaEnum.Chest]: [
    {
      emotion: VRMExpressionPresetName.Angry,
      text: 'touch.femaleAction.chestAction.angryA',
    },
    {
      emotion: VRMExpressionPresetName.Angry,
      text: 'touch.femaleAction.chestAction.angryB',
    },
    {
      emotion: VRMExpressionPresetName.Angry,
      text: 'touch.femaleAction.chestAction.angryC',
    },
    {
      emotion: VRMExpressionPresetName.Surprised,
      text: 'touch.femaleAction.chestAction.surprisedA',
    },
  ],
  [TouchAreaEnum.Belly]: [
    {
      emotion: VRMExpressionPresetName.Surprised,
      text: 'touch.femaleAction.bellyAction.surprisedA',
    },
    {
      emotion: VRMExpressionPresetName.Angry,
      text: 'touch.femaleAction.bellyAction.angryA',
    },
    {
      emotion: VRMExpressionPresetName.Relaxed,
      text: 'touch.femaleAction.bellyAction.relaxedA',
    },
    {
      emotion: VRMExpressionPresetName.Relaxed,
      text: 'touch.femaleAction.bellyAction.relaxedB',
    },
  ],
};

export const DEFAULT_TOUCH_ACTION_CONFIG_MALE: TouchActionConfig = {
  [TouchAreaEnum.Head]: [
    {
      emotion: VRMExpressionPresetName.Neutral,
      text: 'touch.maleAction.headAction.neutralA',
    },
    {
      emotion: VRMExpressionPresetName.Neutral,
      text: 'touch.maleAction.headAction.neutralB',
    },
    {
      emotion: VRMExpressionPresetName.Neutral,
      text: 'touch.maleAction.headAction.neutralC',
    },
  ],
  [TouchAreaEnum.Arm]: [
    {
      emotion: VRMExpressionPresetName.Neutral,
      text: 'touch.maleAction.armAction.neutralA',
    },
    {
      emotion: VRMExpressionPresetName.Neutral,
      text: 'touch.maleAction.armAction.neutralB',
    },
    {
      emotion: VRMExpressionPresetName.Neutral,
      text: 'touch.maleAction.armAction.neutralC',
    },
  ],
  [TouchAreaEnum.Leg]: [
    {
      emotion: VRMExpressionPresetName.Neutral,
      text: 'touch.maleAction.legAction.neutralA',
    },
    {
      emotion: VRMExpressionPresetName.Neutral,
      text: 'touch.maleAction.legAction.neutralB',
    },
    {
      emotion: VRMExpressionPresetName.Angry,
      text: 'touch.maleAction.legAction.angryA',
    },
  ],
  [TouchAreaEnum.Chest]: [
    {
      emotion: VRMExpressionPresetName.Neutral,
      text: 'touch.maleAction.chestAction.neutralA',
    },
    {
      emotion: VRMExpressionPresetName.BlinkLeft,
      text: 'touch.maleAction.chestAction.blinkLeftA',
    },
  ],
  [TouchAreaEnum.Belly]: [
    {
      emotion: VRMExpressionPresetName.Neutral,
      text: 'touch.maleAction.bellyAction.neutralA',
    },
    {
      emotion: VRMExpressionPresetName.Happy,
      text: 'touch.maleAction.bellyAction.happyA',
    },
    {
      emotion: VRMExpressionPresetName.Neutral,
      text: 'touch.maleAction.bellyAction.neutralB',
    },
  ],
};

export const DEFAULT_TOUCH_ACTION_CONFIG_OTHER: TouchActionConfig = {
  [TouchAreaEnum.Head]: [],
  [TouchAreaEnum.Arm]: [],
  [TouchAreaEnum.Leg]: [],
  [TouchAreaEnum.Chest]: [],
  [TouchAreaEnum.Belly]: [],
};

export const EMPTY_TOUCH_CONFIG: TouchActionConfig = {
  [TouchAreaEnum.Head]: [],
  [TouchAreaEnum.Arm]: [],
  [TouchAreaEnum.Leg]: [],
  [TouchAreaEnum.Chest]: [],
  [TouchAreaEnum.Belly]: [],
};

export const MAX_TOUCH_ACTION_TEXT_LENGTH = 100;

export const DEFAULT_MOTION_ANIMATION_FEMALE: MotionAnimation[] = [
  {
    id: 'Praying',
    name: '祈祷',
    url: 'https://r2.vidol.chat/motions/Praying.fbx',
    avatar: 'https://d99n9xvb9513w.cloudfront.net/thumbnails/motions/103130903/animated.gif',
  },
  {
    id: 'Hip Hop Dancing',
    name: 'HipHop 舞蹈',
    url: 'https://r2.vidol.chat/motions/Hip Hop Dancing.fbx',
    avatar: 'https://d99n9xvb9513w.cloudfront.net/thumbnails/motions/101960907/animated.gif',
  },
  {
    id: 'Rumba Dancing',
    name: 'Rumba 舞蹈',
    url: 'https://r2.vidol.chat/motions/Rumba Dancing.fbx',
    avatar: 'https://d99n9xvb9513w.cloudfront.net/thumbnails/motions/102970901/animated.gif',
  },
  {
    id: 'Dancing Twerk',
    name: '扭臀舞',
    url: 'https://r2.vidol.chat/motions/Dancing Twerk.fbx',
    avatar: 'https://d99n9xvb9513w.cloudfront.net/thumbnails/motions/128660903/animated.gif',
  },
];

export const DEFAULT_MOTION_ANIMATION_MALE: MotionAnimation[] = [
  {
    id: 'Silly Dancing',
    name: 'Silly 舞蹈',
    url: 'https://r2.vidol.chat/motions/Silly Dancing.fbx',
    avatar: 'https://d99n9xvb9513w.cloudfront.net/thumbnails/motions/101920902/animated.gif',
  },
];
export const DEFAULT_MOTION_ANIMATION_OTHER: MotionAnimation[] = [];

export const ANIMATION_CONFIG = {
  [GenderEnum.FEMALE]: DEFAULT_MOTION_ANIMATION_FEMALE,
  [GenderEnum.MALE]: DEFAULT_MOTION_ANIMATION_MALE,
  [GenderEnum.OTHER]: DEFAULT_MOTION_ANIMATION_OTHER,
};

export const DEFAULT_GESTURE_ANIMATION_FEMALE: MotionAnimation[] = [
  {
    id: 'Standing',
    name: '站立',
    url: 'https://r2.vidol.chat/posture/Female Standing Pose.fbx',
    avatar: 'https://d99n9xvb9513w.cloudfront.net/thumbnails/motions/140700904/animated.gif',
  },
  {
    id: 'Dynamic',
    name: '动态',
    url: 'https://r2.vidol.chat/posture/Female Dynamic Pose.fbx',
    avatar: 'https://d99n9xvb9513w.cloudfront.net/thumbnails/motions/140300903/animated.gif',
  },
];

export const DEFAULT_GESTURE__ANIMATION_MALE: MotionAnimation[] = [];
export const DEFAULT_GESTURE__ANIMATION_OTHER: MotionAnimation[] = [];

export const POSTURE_CONFIG = {
  [GenderEnum.FEMALE]: DEFAULT_GESTURE_ANIMATION_FEMALE,
  [GenderEnum.MALE]: DEFAULT_GESTURE__ANIMATION_MALE,
  [GenderEnum.OTHER]: DEFAULT_GESTURE__ANIMATION_OTHER,
};

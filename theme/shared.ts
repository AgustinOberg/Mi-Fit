import { isAndroid } from '../utils/device';
import { black, gray } from './colors';

export const surfaceShadow = {
  shadowColor: isAndroid ? gray['400'] : black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 3.84,
  elevation: 5,
} as any;

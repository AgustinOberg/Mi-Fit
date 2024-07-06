import React, { useMemo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { black, white } from '@/theme/colors';
import { scale } from '@/utils/sizes';

interface Props {
  mode?: 'light' | 'dark';
  height?: number;
  opacity?: number;
  style?: StyleProp<ViewStyle>;
}
const Divider = ({ mode = 'light', height, opacity, style }: Props) => {
  const defaultStyle = useMemo(
    () => ({
      height: height || scale(1),
      backgroundColor: mode === 'dark' ? black : white,
      opacity: opacity || 0.05,
    }),
    [height, mode, opacity]
  );
  return <View style={[defaultStyle, style]} />;
};

export default React.memo(Divider);

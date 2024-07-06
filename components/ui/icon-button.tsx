import { Feather } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '@/theme/colors';
import { scale } from '@/utils/sizes';
import { hex2rgba } from '@/utils/ui';

export const DEFAULT_ICON_SIZE = 56;
interface Props {
  size?: number;
  name?: React.ComponentProps<typeof Feather>['name'];
  onPress?: () => void;
}
const IconButton = ({ size, name = 'plus', onPress }: Props) => {
  const dimensions = useSafeAreaInsets();
  const styles = useMemo(() => stylesFnc(dimensions), [dimensions]);
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        [
          styles.container,
          pressed && styles.pressed,
          {
            width: size || DEFAULT_ICON_SIZE,
            height: size || DEFAULT_ICON_SIZE,
          },
        ] as any
      }
    >
      <Feather name={name} size={scale(24)} color={theme.secondaryText} />
    </Pressable>
  );
};

export default IconButton;

const stylesFnc = (dimensions: EdgeInsets) =>
  StyleSheet.create({
    container: {
      aspectRatio: 1,
      borderRadius: scale(100),
      backgroundColor: theme.accent,
      position: 'absolute',
      bottom: dimensions.bottom + scale(45),
      right: scale(20),
      zIndex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    pressed: {
      backgroundColor: hex2rgba(theme.accent, 0.9),
    },
  });

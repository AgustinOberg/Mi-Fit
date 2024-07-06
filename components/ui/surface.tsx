import React from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet, View } from 'react-native';

import { theme } from '@/theme/colors';
import { scale } from '@/utils/sizes';

const Surface = ({ style, children, ...rest }: ViewProps) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

export default Surface;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryText,
    borderRadius: scale(10),
  },
});

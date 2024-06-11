import React from 'react';
import type { TextProps } from 'react-native';
import { StyleSheet } from 'react-native';

import { gray } from '@/theme/colors';
import { scale } from '@/utils/sizes';

import Text from '../ui/text';

const ScreenTitle = ({ style, children, ...rest }: TextProps) => {
  return (
    <Text style={[styles.title, style]} weight={700} {...rest}>
      {children}
    </Text>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: scale(32),
    color: gray[900],
  },
});

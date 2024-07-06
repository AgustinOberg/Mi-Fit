import React, { useMemo } from 'react';
import type { TextProps as RNTextProps } from 'react-native';
import { StyleSheet, Text as NativeText } from 'react-native';

import { gray } from '@/theme/colors';
import type { Weight } from '@/theme/fonts';
import { getFont } from '@/theme/fonts';
import { scale } from '@/utils/sizes';

export interface TextProps extends RNTextProps {
  weight?: Weight;
  italic?: boolean;
  dark?: boolean;
}

const defaultLightColor = gray[900];
const defaultDarkColor = gray[100];

export const DEFAULT_FONT_SIZE = scale(16);

const Text = ({
  children,
  weight = 400,
  italic = false,
  style,
  dark = false,
  ...rest
}: TextProps) => {
  const computedStyle = useMemo(() => {
    const fontFamily = getFont(weight, italic);
    const textStyles = {
      fontFamily,
      color: dark ? defaultDarkColor : defaultLightColor,
      fontSize: DEFAULT_FONT_SIZE,
    };

    return StyleSheet.compose(textStyles, StyleSheet.flatten(style));
  }, [weight, italic, style, dark]);

  return (
    <NativeText style={computedStyle} {...rest}>
      {children}
    </NativeText>
  );
};

export default Text;

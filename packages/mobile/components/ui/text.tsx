import React, { useMemo } from 'react';
import type { TextProps } from 'react-native';
import { StyleSheet, Text as NativeText } from 'react-native';

import { gray } from '@/theme/colors';
import type { Weight } from '@/theme/fonts';
import { getFont } from '@/theme/fonts';
import { scale } from '@/utils/sizes';

interface Props extends TextProps {
  weight?: Weight;
  italic?: boolean;
}

const defaultColor = gray[700];

const Text = ({
  children,
  weight = 500,
  italic = false,
  style,
  ...rest
}: Props) => {
  const computedStyle = useMemo(() => {
    const fontFamily = getFont(weight, italic);
    const textStyles = { fontFamily, color: defaultColor, fontSize: scale(16) };

    return StyleSheet.compose(textStyles, StyleSheet.flatten(style));
  }, [weight, italic, style]);

  return (
    <NativeText style={computedStyle} {...rest}>
      {children}
    </NativeText>
  );
};

export default Text;

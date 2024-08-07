import React, { useCallback, useMemo } from 'react';
import type {
  GestureResponderEvent,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Pressable, StyleSheet } from 'react-native';

import { logEvent } from '@/events/actions';
import { gray, primary, theme, white } from '@/theme/colors';
import type { Weight } from '@/theme/fonts';
import { scale } from '@/utils/sizes';
import { hex2rgba } from '@/utils/ui';

import Text from './text';

export type ButtonVariant =
  | 'filled-primary'
  | 'filled-secondary'
  | 'text'
  | 'outlined';

interface Props extends PressableProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  prefix?: React.JSXElementConstructor<{ style?: StyleProp<TextStyle> }>;
  suffix?: React.JSXElementConstructor<{ style?: StyleProp<TextStyle> }>;
  name?: string;
  properties?: Record<string, any>;
  withCustomChild?: boolean;
}

type VariantValues = {
  backgroundColor: string;
  textColor: string;
  weight: Weight;
  borderColor?: string;
  pressedColor?: string;
};

const variantStyles: { [key in ButtonVariant]: VariantValues } = {
  'filled-primary': {
    backgroundColor: primary['500'],
    textColor: theme.secondaryText,
    weight: 700,
    borderColor: 'transparent',
    pressedColor: hex2rgba(primary['500'], 0.9),
  },
  'filled-secondary': {
    backgroundColor: theme.secondaryAccent,
    textColor: theme.primaryText,
    weight: 400,
    borderColor: '#3E3E3E',
    pressedColor: '#3E3E3E',
  },
  outlined: {
    backgroundColor: 'transparent',
    textColor: gray[700],
    weight: 400,
    borderColor: primary['500'],
    pressedColor: hex2rgba(primary['500'], 0.05),
  },
  text: {
    backgroundColor: white,
    textColor: primary['500'],
    weight: 400,
    borderColor: 'transparent',
    pressedColor: gray[25],
  },
};

const Button = ({
  variant = 'filled-primary',
  children,
  style,
  textStyle,
  prefix: Prefix,
  suffix: Suffix,
  name,
  properties,
  onPress: _onPress,
  withCustomChild,
  ...rest
}: Props) => {
  const variantStyle = useMemo(() => variantStyles[variant], [variant]);
  const styles = useMemo(() => stylesFnc(variantStyle), [variantStyle]);

  const onPress = useCallback(
    (event: GestureResponderEvent) => {
      if (name) {
        logEvent(name, properties);
      }
      if (_onPress) {
        _onPress(event);
      }
    },
    [name, properties, _onPress]
  );

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        style,
        rest.disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
      {...rest}
    >
      {Prefix && <Prefix />}
      {withCustomChild ? (
        children
      ) : (
        <Text
          weight={variantStyle.weight}
          numberOfLines={2}
          style={[styles.text, textStyle]}
        >
          {children}
        </Text>
      )}
      {Suffix && <Suffix />}
    </Pressable>
  );
};

export default Button;

const stylesFnc = (variantStyle: VariantValues) =>
  StyleSheet.create({
    container: {
      backgroundColor: variantStyle.backgroundColor,
      borderRadius: scale(5),
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: scale(10),
      paddingHorizontal: scale(28),
      flexDirection: 'row',
      gap: scale(5),
      borderWidth: scale(1.2),
      borderColor: variantStyle.borderColor,
    },
    text: {
      color: variantStyle.textColor,
      fontSize: scale(15),
    },
    disabled: {
      backgroundColor: hex2rgba(variantStyle.backgroundColor, 0.5),
    },
    pressed: {
      backgroundColor: variantStyle.pressedColor,
    },
  });

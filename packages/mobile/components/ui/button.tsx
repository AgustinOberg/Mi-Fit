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
import { gray, primary, white } from '@/theme/colors';
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
  preffix?: React.JSXElementConstructor<{ style?: StyleProp<TextStyle> }>;
  name?: string;
  properties?: Record<string, any>;
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
    backgroundColor: primary[600],
    textColor: white,
    weight: 500,
    borderColor: 'transparent',
    pressedColor: primary[700],
  },
  'filled-secondary': {
    backgroundColor: primary[100],
    textColor: primary[700],
    weight: 500,
    borderColor: 'transparent',
    pressedColor: primary[200],
  },
  outlined: {
    backgroundColor: white,
    textColor: gray[700],
    weight: 500,
    borderColor: primary[300],
    pressedColor: gray[100],
  },

  text: {
    backgroundColor: primary[25],
    textColor: primary[600],
    weight: 500,
    borderColor: 'transparent',
    pressedColor: primary[50],
  },
};

const Button = ({
  variant = 'filled-primary',
  children,
  style,
  textStyle,
  preffix: Preffix,
  name,
  properties,
  onPress: _onPress,
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
        rest.disabled && styles.disabled,
        style,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
      {...rest}
    >
      {Preffix && <Preffix />}
      <Text
        weight={variantStyle.weight}
        numberOfLines={2}
        style={[styles.text, textStyle]}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;

const stylesFnc = (variantStyle: VariantValues) =>
  StyleSheet.create({
    container: {
      backgroundColor: variantStyle.backgroundColor,
      borderRadius: scale(8),
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: scale(10),
      paddingHorizontal: scale(18),
      flexDirection: 'row',
      gap: scale(5),
      borderWidth: 1,
      borderColor: variantStyle.borderColor,
    },
    text: {
      color: variantStyle.textColor,
      fontSize: scale(16),
    },
    disabled: {
      backgroundColor: hex2rgba(variantStyle.backgroundColor, 0.5),
    },
    pressed: {
      backgroundColor: variantStyle.pressedColor,
    },
  });

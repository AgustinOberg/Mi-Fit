import * as React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { TextInput, TextInputProps } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { TextInput as NTextInput } from 'react-native';

import { destructive, gray, primary, theme, transparent } from '@/theme/colors';
import { getFont } from '@/theme/fonts';
import { scale } from '@/utils/sizes';

import Text from '../ui/text';
import Label from './label';

export type InputVariant = 'focused' | 'error' | 'disabled' | 'default';
type VariantValues = {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
};

const variantStyles: { [key in InputVariant]: VariantValues } = {
  default: {
    backgroundColor: transparent,
    textColor: theme.primaryText,
    borderColor: primary['500'],
  },
  focused: {
    backgroundColor: transparent,
    textColor: theme.primaryText,
    borderColor: primary['500'],
  },
  error: {
    backgroundColor: transparent,
    textColor: gray[700],
    borderColor: destructive[200],
  },
  disabled: {
    backgroundColor: gray[200],
    textColor: gray[500],
    borderColor: gray[400],
  },
};

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  prefix?: React.ReactNode;
}

type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

export type RuleType<T> = { [name in keyof T]: TRule };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
};

interface ControlledInputProps<T extends FieldValues>
  extends NInputProps,
    InputControllerType<T> {}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const { label, error, prefix, testID, disabled, ...inputProps } = props;
  const [isFocussed, setIsFocussed] = React.useState(false);

  const _styleWithVariant = React.useMemo(() => {
    let variant: InputVariant = 'default';
    if (isFocussed) {
      variant = 'focused';
    }
    if (error) {
      variant = 'error';
    }
    if (props.disabled) {
      variant = 'disabled';
    }
    return variantStyles[variant];
  }, [isFocussed, error, props.disabled]);

  const styles = React.useMemo(
    () => stylesFnc(_styleWithVariant),
    [_styleWithVariant]
  );
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);
  const hasPrefix = prefix !== undefined;
  return (
    <View style={styles.container}>
      {label && <Label>{label}</Label>}
      <View>
        <NTextInput
          testID={testID}
          ref={ref}
          placeholderTextColor={gray[400]}
          editable={!disabled}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputProps}
          style={[
            styles.input,
            inputProps.style,
            hasPrefix && styles.inputWithPrefix,
          ]}
        />
        {hasPrefix && <View style={styles.prefix}>{prefix}</View>}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
});

export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, ...inputProps } = props;

  const { field, fieldState } = useController({ control, name, rules });
  return (
    <Input
      ref={field.ref}
      autoCapitalize="none"
      onChangeText={field.onChange}
      value={(field.value as string) || ''}
      {...inputProps}
      error={fieldState.error?.message}
    />
  );
}

const stylesFnc = (variant: VariantValues) =>
  StyleSheet.create({
    container: {
      marginBottom: scale(4),
    },
    input: {
      paddingVertical: scale(10),
      paddingHorizontal: scale(10),
      backgroundColor: variant.backgroundColor,
      borderRadius: scale(8),
      fontFamily: getFont(400, false),
      color: variant.textColor,
      borderWidth: scale(1.2),
      borderColor: variant.borderColor,
    },

    prefix: {
      width: scale(30),
      height: '100%',
      position: 'absolute',
      left: scale(12),
      top: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputWithPrefix: {
      paddingLeft: scale(30 + 12 + 10),
    },
    errorText: {
      color: destructive[300],
      fontSize: scale(12),
      marginTop: scale(5),
      alignSelf: 'flex-end',
    },
  });

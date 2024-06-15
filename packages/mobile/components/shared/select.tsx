import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { black } from '@/theme/colors';
import { scale } from '@/utils/sizes';

import Button from '../ui/button';
import Label from './label';

const Icon = () => {
  return (
    <Feather
      name="chevron-down"
      size={scale(15)}
      color={black}
      style={styles.icon}
    />
  );
};

interface Props {
  label?: string;
  placeholder?: string;
}

const Select = ({ label, placeholder }: Props) => {
  return (
    <View>
      {label && <Label>{label}</Label>}
      <Button style={styles.button} variant="outlined" suffix={Icon}>
        {placeholder}
      </Button>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'space-between',
  },
  icon: {
    opacity: 0.5,
  },
});

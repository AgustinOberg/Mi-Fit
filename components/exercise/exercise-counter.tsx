import React from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';

import { theme } from '@/theme/colors';
import { scale } from '@/utils/sizes';
import { hex2rgba } from '@/utils/ui';

import Text from '../ui/text';

interface Props {
  title: string;
  quantity: number;
  onPress?: () => void;
}
const ExerciseCounter = ({ quantity, title, onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text weight={300} style={styles.title}>
        {title}
      </Text>
      <TextInput
        style={styles.quantityContainer}
        value={quantity.toString()}
        inputMode="decimal"
      />
    </Pressable>
  );
};

export default ExerciseCounter;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    gap: scale(3),
  },
  title: {
    fontSize: scale(12),
  },
  quantityContainer: {
    padding: scale(10),
    alignItems: 'center',
    minWidth: scale(40),
    justifyContent: 'center',
    borderRadius: scale(5),
    //TODO: color in constants
    backgroundColor: hex2rgba(theme.mutedText, 0.05),
    fontFamily: 'Inter_800ExtraBold',
    color: theme.secondaryText,
    textAlign: 'center',
  },
});

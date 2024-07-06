import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { theme } from '@/theme/colors';
import type { ExcersisePreview } from '@/types/excersise';
import { scale } from '@/utils/sizes';

import ExerciseCounter from '../exercise/exercise-counter';
import Divider from '../ui/divider';
import ItemDescription from '../ui/list-item-description';
import ItemTitle from '../ui/list-item-title';
import Surface from '../ui/surface';

export type ExerciseCounter = {
  key: string;
  value: number;
  label: string;
};

interface Props {
  exercise: ExcersisePreview;
  counter: ExerciseCounter[];
  onPress?: (key: string) => void;
}
const RoutineExercise = ({ exercise, counter, onPress }: Props) => {
  return (
    <Surface style={styles.container}>
      <View style={[styles.imageContainer, styles.image]}>
        <Image
          source={{ uri: exercise.image }}
          style={[styles.image, styles.full]}
        />
      </View>

      <View style={styles.counterContainer}>
        <View style={styles.textContainer}>
          <ItemTitle>{exercise.name}</ItemTitle>
          <ItemDescription>{exercise.mainMuscle}</ItemDescription>
        </View>
        <Divider mode="dark" style={styles.divider} />
        <View style={styles.footer}>
          {counter.map((item) => (
            <ExerciseCounter
              key={item.key}
              title={item.label}
              quantity={item.value}
              onPress={() => onPress && onPress(item.key)}
            />
          ))}
        </View>
      </View>
    </Surface>
  );
};

export default RoutineExercise;

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(40),
  },
  image: {
    aspectRatio: 1,
    borderRadius: scale(10),
  },
  textContainer: {
    paddingLeft: '5%',
  },
  imageContainer: {
    width: scale(99),
    padding: scale(10),
    borderWidth: scale(0.5),
    borderColor: theme.primaryText,
  },
  container: {
    backgroundColor: theme.secondarySurface,
    padding: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: scale(120),
  },
  divider: {
    marginVertical: scale(5),
    width: '80%',
    alignSelf: 'center',
  },
  counterContainer: {
    flex: 1,
  },
  full: {
    width: '100%',
    height: '100%',
  },
});

import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { EXCERCISES } from '@/__test__/mock/exercise';
import { scale } from '@/utils/sizes';

import Divider from '../ui/divider';
import RoutineExercise from './routine-exercise';

const Separator = () => <Divider mode="dark" height={10} />;
const RoutineExerciseList = () => {
  return (
    <FlatList
      data={EXCERCISES}
      keyExtractor={(item) => item.id}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <RoutineExercise
          counter={[
            {
              key: 'series',
              value: 10,
              label: 'Series',
            },
            {
              key: 'reps',
              value: 10,
              label: 'Repet.',
            },
            {
              key: 'weight',
              value: 10,
              label: 'Peso(kg)',
            },
          ]}
          exercise={item}
        />
      )}
    />
  );
};

export default RoutineExerciseList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: scale(130),
  },
});

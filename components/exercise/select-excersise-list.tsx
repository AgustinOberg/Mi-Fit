import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { theme } from '@/theme/colors';
import type { ExcersisePreview } from '@/types/excersise';
import { scale } from '@/utils/sizes';

import Divider from '../ui/divider';
import ExerciseItem from './exercise-item';

interface Props {
  data: ExcersisePreview[];
  selectedItems?: ExcersisePreview[];
  onPress?: (item: ExcersisePreview) => void;
}

const Separator = () => <Divider height={scale(10)} mode="light" />;
const SelectExcersiseList = ({ data, onPress, selectedItems = [] }: Props) => {
  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <ExerciseItem
          isSelected={selectedItems.some(
            (selectedItem) => selectedItem.id === item.id
          )}
          id={item.id}
          image={item.image}
          mainMuscle={item.mainMuscle}
          name={item.name}
          onPress={() => onPress?.(item)}
        />
      )}
    />
  );
};

export default SelectExcersiseList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: theme.secondarySurface,
    borderRadius: scale(20),
    padding: scale(10),
  },
  listContent: {
    paddingBottom: scale(30),
  },
});

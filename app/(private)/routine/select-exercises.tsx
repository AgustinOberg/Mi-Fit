import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { EXCERCISES } from '@/__test__/mock/exercise';
import SelectExcersiseList from '@/components/exercise/select-excersise-list';
import Button from '@/components/ui/button';
import { useSelectItem } from '@/hooks/useSelectItem';
import type { ExcersisePreview } from '@/types/excersise';
import { scale } from '@/utils/sizes';

const SelectExerciseScreen = () => {
  const { selectElement, selectedElements } = useSelectItem<ExcersisePreview>();
  const selectedQuantity = useMemo(
    () => selectedElements.length,
    [selectedElements]
  );
  const edgeInsets = useSafeAreaInsets();
  const styles = useMemo(() => stylesFnc(edgeInsets), [edgeInsets]);
  return (
    <View style={styles.screenContainer}>
      <View style={styles.exerciseListContainer}>
        <SelectExcersiseList
          data={EXCERCISES}
          onPress={selectElement}
          selectedItems={selectedElements}
        />
        {selectedQuantity > 0 && (
          <Button
            style={styles.button}
          >{`Agregar ejercicio (${selectedQuantity})`}</Button>
        )}
      </View>
    </View>
  );
};

export default SelectExerciseScreen;

const stylesFnc = (edgeInsets: EdgeInsets) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
    },
    exerciseListContainer: {
      flex: 1,
      marginBottom: edgeInsets.bottom + scale(10),
      paddingHorizontal: scale(15),
      paddingVertical: scale(10),
    },

    button: {
      alignSelf: 'center',
      marginTop: scale(12),
    },
  });

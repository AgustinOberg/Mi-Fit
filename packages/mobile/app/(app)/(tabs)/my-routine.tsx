import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ExerciseCard from '@/components/exercise/exercise-card';
import ScreenContainer from '@/components/shared/screen-container';
import { scale } from '@/utils/sizes';

const Spacer = () => <View style={{ height: scale(10) }} />;

const MyRoutine = () => {
  return (
    <ScreenContainer title="Mis rutinas">
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => item.toString()}
        ItemSeparatorComponent={Spacer}
        ListFooterComponent={Spacer}
        renderItem={({ item }) => (
          <ExerciseCard
            coverImage="https://lh3.googleusercontent.com/a/ACg8ocK-7JWn0GEds389CADFdphKGitsAyC9sPJRgJvl7KsPbmWVydx75Q=s576-c-no"
            title="Rutina para romperse los abdominales"
            content={[
              {
                id: '1',
                title: 'Hipertrofia',
                description: 'Gimnasio',
              },
            ]}
          />
        )}
      />
    </ScreenContainer>
  );
};

export default MyRoutine;

const styles = StyleSheet.create({});

import { router } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ExerciseCard from '@/components/exercise/exercise-card';
import ScreenContainer from '@/components/shared/screen-container';
import Button from '@/components/ui/button';
import { scale } from '@/utils/sizes';

const Spacer = () => <View style={{ height: scale(10) }} />;

const Footer = () => {
  const goToCreateRoutine = () => {
    router.push('(app)/add-routine');
  };
  return (
    <>
      <Spacer />
      <Button
        variant="filled-primary"
        onPress={goToCreateRoutine}
        style={styles.button}
      >
        Crear rutina
      </Button>
      <Spacer />
    </>
  );
};

const MyRoutine = () => {
  return (
    <ScreenContainer title="Mis rutinas">
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => item.toString()}
        ItemSeparatorComponent={Spacer}
        ListFooterComponent={Footer}
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

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
  },
});

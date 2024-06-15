import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import ExerciseCard from '@/components/exercise/exercise-card';
import ScreenContainer from '@/components/shared/screen-container';
import UserPostHeader from '@/components/social/user-post-header';

const HomePage = () => {
  const router = useRouter();

  return (
    <ScreenContainer title="Inicio">
      <View style={{ gap: 20 }}>
        <UserPostHeader
          username="Agustin Oberg"
          time="Hace 2 horas"
          ctaLabel="Seguir"
          ctaAction={() => console.log('Seguir')}
          avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocK-7JWn0GEds389CADFdphKGitsAyC9sPJRgJvl7KsPbmWVydx75Q=s576-c-no"
        />
        <ExerciseCard
          onPress={() => router.push('routine/1')}
          coverImage="https://lh3.googleusercontent.com/a/ACg8ocK-7JWn0GEds389CADFdphKGitsAyC9sPJRgJvl7KsPbmWVydx75Q=s576-c-no"
          title="Rutina para romperse los abdominales"
          content={[
            {
              id: '1',
              title: 'Press Banca Barra',
              description: '70kg x5 / 80kg x3 / 10kg x1 ',
            },
            {
              id: '2',
              title: 'Press Banca Barra',
              description: '70kg x5 / 80kg x3 / 10kg x1 ',
            },
            {
              id: '3',
              title: 'Press Banca Barra',
              description: '70kg x5 / 80kg x3 / 10kg x1 ',
            },
            {
              id: '4',
              title: 'Press Banca Barra',
              description: '70kg x5 / 80kg x3 / 10kg x1 ',
            },
          ]}
        />
      </View>
    </ScreenContainer>
  );
};

export default HomePage;

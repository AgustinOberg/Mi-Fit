import { Stack } from 'expo-router';
import React from 'react';

import { white } from '@/theme/colors';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="add-routine"
        options={{
          title: 'Agregar rutina',
          headerBackTitleVisible: false,
          contentStyle: {
            backgroundColor: white,
          },
        }}
      />
    </Stack>
  );
};

export default _layout;

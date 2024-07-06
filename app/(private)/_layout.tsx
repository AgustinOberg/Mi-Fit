import { Redirect, Stack } from 'expo-router';
import React from 'react';

import { theme } from '@/theme/colors';
import { scale } from '@/utils/sizes';
const isAuth = false;
const _layout = () => {
  if (!isAuth) return <Redirect href={'(public)'} />;
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: theme.background,
        },
        headerBackTitleStyle: {
          fontFamily: 'Inter_400Regular',
        },
        headerTitleStyle: {
          fontFamily: 'Inter_600SemiBold',
          fontSize: scale(16),
        },
        headerStyle: {
          backgroundColor: theme.accent,
        },
        headerBackTitleVisible: false,
        headerTintColor: theme.surface,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="(bottom-tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="routine/create-routine"
        options={{ headerTitle: 'Crear rutina' }}
      />
      <Stack.Screen
        name="routine/select-exercises"
        options={{ headerTitle: 'Seleccionar ejercicio' }}
      />
    </Stack>
  );
};

export default _layout;

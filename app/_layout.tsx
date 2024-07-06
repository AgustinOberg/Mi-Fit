import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

import GestureHandler from '@/components/shared/gesture-handler';
import { useInit } from '@/hooks/useInit';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: '(private)',
};

const _layout = () => {
  const { isLoading } = useInit();

  useEffect(() => {
    if (!isLoading)
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 100);
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <GestureHandler>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(private)" />
        <Stack.Screen name="(public)" />
      </Stack>
    </GestureHandler>
  );
};

export default _layout;

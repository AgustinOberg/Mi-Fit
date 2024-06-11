import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';

import { useLoadFonts } from '@/hooks/useLoadFonts';

export const unstable_settings = {
  initialRouteName: '(app)',
};

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const { fontsLoaded } = useLoadFonts();

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 2000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <RootLayoutNav />;
};

const RootLayoutNav = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(app)" />
    </Stack>
  );
};
export default RootLayout;

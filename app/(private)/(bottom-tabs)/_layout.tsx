import { Tabs } from 'expo-router';
import React from 'react';

import { theme } from '@/theme/colors';
import { scale } from '@/utils/sizes';

const _layout = () => {
  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: theme.background,
      }}
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          backgroundColor: theme.surface,
          borderTopWidth: 0,
        },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: theme.accent,
        headerStyle: {
          backgroundColor: theme.accent,
        },
        headerTitleStyle: {
          fontFamily: 'Inter_600SemiBold',
          fontSize: scale(16),
        },
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="routine" options={{ title: 'Mis rutinas' }} />
    </Tabs>
  );
};

export default _layout;

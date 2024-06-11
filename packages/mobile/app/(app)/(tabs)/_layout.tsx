import { Tabs } from 'expo-router';
import React from 'react';

import {
  FeatherTabIcon,
  MaterialCommunityTabIcon,
} from '@/components/shared/tab-icon';
import TabLabel from '@/components/shared/tab-label';
import { primary, white } from '@/theme/colors';
import { isAndroid } from '@/utils/device';
import { scale } from '@/utils/sizes';

const _layout = () => {
  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: white,
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: primary[700],
        tabBarLabel: TabLabel,
        tabBarStyle: {
          height: isAndroid ? scale(65) : scale(80),
        },
        tabBarLabelPosition: 'below-icon',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherTabIcon name="home" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherTabIcon name="search" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="my-routine"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityTabIcon name="weight-lifter" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;

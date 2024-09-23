import { Tabs } from 'expo-router';
import React from 'react';

import Header from '@/components/Header';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Header />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? 'home' : 'home-outline'}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='explore'
          options={{
            title: 'Explore',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? 'search' : 'search-outline'}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? 'man' : 'man-outline'}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

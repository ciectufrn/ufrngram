import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import HomeStackNavigator from './HomeStackNavigator';
import PicturesStackNavigator from './PicturesStackNavigator';

export default function LoggedTabNavigator() {
  const homeIcom = <FontAwesome5 name="paper-plane" size={24} color="black"/>;
  
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="HomeStackNavigator" 
        component={HomeStackNavigator} 
        options={{ 
          headerShown: false, 
          title: 'Feed', 
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="newspaper" size={size} color={color} /> 
        }}
      />
      <Tab.Screen
        name="PicturesStackNavigator"
        component={PicturesStackNavigator} options={{ headerShown: false }}
        options={{ 
          headerShown: false, 
          title: 'Pictures', 
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="image" size={size} color={color} /> 
        }}
      />
    </Tab.Navigator>
  );
}
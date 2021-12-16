import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import PictureScreen from '../screens/PictureScreen';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PictureScreen" component={PictureScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
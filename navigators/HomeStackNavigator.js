import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ChatListScreen from '../screens/ChatListScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ChatListScreen" component={ChatListScreen} options={{ title: 'Chat List'}}/>
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title: 'Chat'}}/>
    </Stack.Navigator>
  );
}
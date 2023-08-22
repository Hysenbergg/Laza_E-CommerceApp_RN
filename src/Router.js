import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigations import
import IntroductionStack from './navigations/IntroductionStack';
import AppDrawer from './navigations/AppDrawer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='IntroductionStack' component={IntroductionStack} />
        <Stack.Screen name='AppDrawer' component={AppDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

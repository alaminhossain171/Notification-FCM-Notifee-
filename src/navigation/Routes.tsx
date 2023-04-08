// In App.js in a new project
//@ts-nocheck
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Settings from '../screens/Settings/Settings';
import NavigationService from './NavigationService';
import Menu from '../screens/Menu/Menu';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer ref={(ref) => NavigationService.setTopLevelNavigator(ref)}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#9AC4F8",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
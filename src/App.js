import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      </NavigationContainer>

    </>
  );
}
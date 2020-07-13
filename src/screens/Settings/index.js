import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MemoryScreen from './Memory';
import CPUScreen from './CPU';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="CPU" component={CPUScreen} />
            <Tab.Screen name="Memory" component={MemoryScreen} />
        </Tab.Navigator>
    );
}

export default MyTabs;



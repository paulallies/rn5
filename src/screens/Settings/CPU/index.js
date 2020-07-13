import React from 'react';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import CPUHome from './home'
import CPUDetail from './detail'
import Styles from '../../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function CPUScreen({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={CPUHome}
                options={{
                    title: 'CPU Home', headerLeft: () => (
                        <TouchableOpacity
                            style={Styles.headerButton}
                            onPress={() => navigation.openDrawer()}
                        >
                            <Text>Open Drawer</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="Detail"
                component={CPUDetail}
                options={{ title: 'CPU Detail' }}
            />
        </Stack.Navigator>
    );
}
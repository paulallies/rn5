import React from 'react';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Styles from '../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfileHome from './ProfileHome';

const Stack = createStackNavigator();

export default function Profile({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={ProfileHome}
                options={{
                    title: 'Home', headerLeft: () => (
                        <TouchableOpacity
                            style={Styles.headerButton}
                            onPress={() => navigation.openDrawer()}
                        >
                            <Text>Open Drawer</Text>
                        </TouchableOpacity>
                    ),
                }}
            />

        </Stack.Navigator >
    )
}

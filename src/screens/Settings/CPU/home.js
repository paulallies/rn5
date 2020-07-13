import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../../../styles';

function CPUHome({ navigation }) {

    return (
        <View style={Styles.container}>
            <Text>CPU Settings</Text>
            <Button
                onPress={() => navigation.navigate("Detail")}
                title="Go To Details"
            />
        </View>
    );
}



export default CPUHome;
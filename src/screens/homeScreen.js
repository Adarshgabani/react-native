import React from 'react';

import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.homeScreenTextStyle}>It's a Home Screen</Text>
            <Button
                title='Go to Component Screen'
                onPress={() => navigation.navigate('Component')}
            />
            <Button
                title='Go to List Screen'
                onPress={() => navigation.navigate('List')}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    homeScreenTextStyle: {
        fontSize: 30,
    }
})

export default HomeScreen;
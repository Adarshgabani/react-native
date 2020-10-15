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
            <Button
                title='Go to Image Screen'
                onPress={() => navigation.navigate('Image')}
            />
            <Button
                title='Go to Counter Screen'
                onPress={() => navigation.navigate('Counter')}
            />
            <Button
                title='Go to Color Screen'
                onPress={() => navigation.navigate('Color')}
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
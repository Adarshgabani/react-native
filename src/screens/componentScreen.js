import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>This is Component Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
})

export default ComponentScreen;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        flexDirection: "row",
        justifyContent: "space-between",


    },
    viewOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red'

    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        top: 100
    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
    }
});

export default BoxScreen;
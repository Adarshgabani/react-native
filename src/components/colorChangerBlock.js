import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorChangerBlock = ({ color, onIncrease, onDecrease }) => {

    return (
        <View>
            <Text>{color}</Text>
            <Button title={`More ${color}`} onPress={() => onIncrease()} />
            <Button title={`less ${color}`} onPress={() => onDecrease()} />
        </View>
    );
};

const Styles = StyleSheet.create({});


export default ColorChangerBlock;
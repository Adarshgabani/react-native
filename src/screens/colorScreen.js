import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';


const ColorScreen = () => {
    const [color, setColor] = useState([]);
    console.log(color);
    return (
        <View>
            <Button
                title="Add a Color"
                onPress={() => {
                    setColor([...color, RandomRGB()])
                }}
            />

            <FlatList

                keyExtractor={(item) => item}
                data={color}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
                }}
            />
        </View>
    );
};

const RandomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
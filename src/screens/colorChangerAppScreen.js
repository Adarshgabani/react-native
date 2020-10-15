import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorChangerBlock from '../components/colorChangerBlock';


const COUNT_INCREMENT = 15;


const ColorChangerAppScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {

        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
        }

    }


    return (
        <View>
            <Text>State Managment using useState</Text>
            <Text>{red}</Text>
            <ColorChangerBlock
                color='Red'
                onIncrease={() => setColor('red', COUNT_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COUNT_INCREMENT)}
            />
            <Text>{green}</Text>
            <ColorChangerBlock
                color='Green'

                onIncrease={() => setColor('green', COUNT_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COUNT_INCREMENT)}
            />
            <Text>{blue}</Text>
            <ColorChangerBlock
                color='Blue'

                onIncrease={() => setColor('blue', COUNT_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COUNT_INCREMENT)}
            />

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }}></View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorChangerAppScreen;
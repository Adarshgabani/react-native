import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorChangerBlock from '../components/colorChangerBlock';

const COUNT_INCREMENT = 15;

const reducer = (state, action) => {
    //state === { red: number, green: number, blue: number};
    //action === {colorToChange: 'red || 'green' || 'blue', amount: 10|| -10};
    //never change state directly eg. red = red + 10 !!!! don't do this.
    //here we create new obj and than we change eg. {...state, red: red + 10} === {red:0,green:0,blue:0,red: red + 10} red replace older red
    //alwayes return what you take.. for example here we take state and in any condition only state should be returned

    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const ColorChangeAppScreenWithReducer = () => {
    //reducer(state) and const [state,...] are not same state
    //dispatch use to runMyReducer .... basically to call reducer Function 


    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state;
    return (
        <View>
            <Text>state Management Using useReducer</Text>

            <Text>{red}</Text>
            <ColorChangerBlock
                color='Red'
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COUNT_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COUNT_INCREMENT })}
            />

            <Text>{green}</Text>
            <ColorChangerBlock
                color='Green'
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COUNT_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COUNT_INCREMENT })}
            />

            <Text>{blue}</Text>
            <ColorChangerBlock
                color='Blue'
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COUNT_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COUNT_INCREMENT })}
            />

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }}></View>


        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorChangeAppScreenWithReducer;
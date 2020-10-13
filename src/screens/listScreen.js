import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 10 },
        { name: 'Friend #2', age: 40 },
        { name: 'Friend #3', age: 50 },
        { name: 'Friend #4', age: 70 },
        { name: 'Friend #5', age: 45 },
        { name: 'Friend #6', age: 60 },
        { name: 'Friend #7', age: 35 },
        { name: 'Friend #8', age: 20 },
        { name: 'Friend #9', age: 21 },

    ];
    return (
        <FlatList
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>
                    {item.name} - Age {item.age}
                </Text>
            }}
            keyExtractor={(friend) => friend.name}

        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    }
});

export default ListScreen;
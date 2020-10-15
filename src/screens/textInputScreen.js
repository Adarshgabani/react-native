import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextInputScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput
                style={styles.textInputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My Name is {name}</Text>
            <View>
                <Text>Enter Password:</Text>
                <TextInput
                    style={styles.textInputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={password}
                    onChangeText={(newValue) => setPassword(newValue)}
                />

                {
                    password.length < 5
                        ? <Text>Password must longer than 5 charechters</Text>
                        : null
                }

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    textInputStyle: {
        margin: 20,
        borderColor: 'black',
        borderWidth: 1,
        height: 40,
    }
});

export default TextInputScreen;
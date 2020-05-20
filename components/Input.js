import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';

const Input = props => {

    return (

        <View style={{ ...styles.input, ...props.style }}>
            <Text>{props.children}</Text>
            <TextInput onPress={() => {}} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#f5f0f0',
        marginVertical: 10,
        paddingVertical: 5,
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    }
});

export default Input;
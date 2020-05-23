import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native';

import Card from '../components/Card';
import TODO from '../data/dummy-data';

const AddTask = props => {
    return (
        <FlatList
            style={styles.screen}
            data={TODO}
            keyExtractor={(x, i) => i.toString()}
            renderItem={({ item }) =>
                <View style={{ flex: 1 }}>
                    <Card desctitle={item.description} id={item.id}>
                        <View style= {{paddingHorizontal: 20, paddingVertical: 10}}>
                            <Text style={styles.boldTextView}>{item.tasktitle}</Text>
                            <View style={styles.buttonText}>
                                <Text style={{ fontFamily: 'GorditaRegular', color: 'black' }}>{item.description}</Text>
                            </View>
                        </View>
                    </Card>
                </View>}

        />

    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    boldTextView: {
        fontSize: 15,
        fontFamily: 'GorditaBold',
        color: 'black'
    },
    buttonText: {
        color: 'black',
        fontSize: 15,
        paddingBottom: 5,
        fontFamily: 'GorditaRegular'
    }
});

export default AddTask;
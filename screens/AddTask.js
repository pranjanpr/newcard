import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native';


import Card from '../components/Card';
import Input from '../components/Input';
import TODO from '../data/dummy-data';
import AddDesc from '../components/AddDesc';


const AddTask = props => {

    return (    
            <FlatList
            
            style={styles.flatsyle}
            data={TODO}

            keyExtractor={(x,i)=>i.toString()}
        
             renderItem={ ({item})=>
         
                <Card style={{padding:20}} desctitle={item.description} id={item.id}>
                    <Text style={styles.boldTextView}>{item.tasktitle}</Text>
                    <AddDesc  desctitle={item.description} id={item.id} />
                     </Card>}
     
            />
            
    );

};

const styles = StyleSheet.create({
    flatsyle:{
        
     
    },
    screen: {
        flex: 1,
    },
    textView: {
        fontSize: 22,
        fontFamily: 'open-sans',
        marginVertical: 10
    },
    boldTextView: {
        fontSize: 12,
        fontFamily: 'open-sans-bold'
    },
    taskInput: {
        width: '100%',
        height: 50
    },
    lowerInputView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    otherInput: {
        width: '49%',
        height: 50
    },
    descInput: {
        height: 90,
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        paddingHorizontal: 10
    },
    nextButtonView: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        width: "100%",
        paddingHorizontal: 5

    },
    inputText: {
        fontSize: 10,
        color: 'blue'
    },
    cbutton: {
        padding: 10,
        backgroundColor: 'blue',
        height: 50,
        width: 50,
        borderRadius: 25,
        marginBottom: 60,
        marginRight: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    ButtonText: {
        color: 'white',
        fontSize: 30
    },
    button: {
        width: "50%"
    }
});

export default AddTask;
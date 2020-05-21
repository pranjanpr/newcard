import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import TODO from '../data/dummy-data';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


let mytodo;
const Card = props => {

  const [descPressed, setDescPressed] = useState(false);

  const descPressedHandler = (iden) => {

    if (descPressed === true)
      setDescPressed(false);
    else {
      setDescPressed(true);
    }
    mytodo = TODO.find(function (todo, index) {
      return todo.id === iden;
    })

  };

  let descOutput;

  if (descPressed) {
    descOutput = (
      <View>
        <View style={styles.lowerInputView}>
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 11, fontFamily: 'GorditaRegular' }}><Text style={styles.inputText}>{mytodo.timeleft}</Text> more hours to go</Text>
          </View>
          <View style={{ width: "50%", alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 11, fontFamily: 'GorditaRegular' }}><Text style={styles.inputText}>{mytodo.quanta}</Text> per day</Text>
          </View>
        </View>
        <View style={styles.lowerInputView}>
          <View style={{ width: "60%" }}>
            <Text style={styles.inputText}>
              <FontAwesome5 name="calendar-alt" size={15} color="black" /><Text style> {mytodo.deadline}</Text></Text>
          </View>
          <View style={{ width: "40%", alignItems: 'flex-end' }}>
            <TouchableOpacity>
              <Text>
                <Feather name="minus-circle" size={18} color="black" /><Text style={styles.inputText}> {mytodo.daysbyhrs}</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );

  }



  return (
    <View style={{ ...styles.card, ...props.style }}>
      <TouchableOpacity onPress={descPressedHandler.bind(this, props.id)} id={props.id}>

        <View >{props.children}</View>
        {descOutput}
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,

    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    width: "94%",

    margin: 10,
    borderWidth: 1,
    borderColor: "#D3D3D3",



  },
  lowerInputView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 2

  },
  inputText: {
    fontSize: 12,
    color: 'black',
    width: '49%',
    fontFamily: 'GorditaBold'

  },
  mybutton: {
    backgroundColor: 'white',
    height: 40,
    width: "25%",
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    borderColor: '#e3dddc',
    borderWidth: 1
  }


});

export default Card;
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import TODO from '../data/dummy-data';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

let mytodo;
const Card = props => {

  const [descPressed, setDescPressed] = useState(false);
  const [presentProgress, setPresentProgress] = useState(parseFloat(0));

  const descPressedHandler = (iden) => {

    if (descPressed === false)
      setDescPressed(true);
    mytodo = TODO.find(function (todo, index) {
      return todo.id === iden;
    })

  };

  const progressChangeHandler = () => {
    setPresentProgress(1 / parseFloat(mytodo.daysbyhrs))
  }

  let descOutput;

  if (descPressed) {
    descOutput = (
      <View>
        <View style={styles.someView}>
          <View style={{ width: "56%" }}>
            <Text style={styles.datastyle}><Text style={styles.inputText}>{mytodo.timeleft}</Text> more hours to go</Text>
          </View>
          <View style={{ width: "44%", alignItems: 'flex-end' }}>
            <Text style={styles.datastyle}><Text style={styles.inputText}>{mytodo.quanta}</Text> per day</Text>
          </View>
        </View>

        <View style={styles.someView}>
          <View style={{ width: "56%" }}>
            <Text style={styles.inputText}>
              <FontAwesome5 name="calendar-alt" size={15} color="black" /><Text style> {mytodo.deadline}</Text></Text>
          </View>

          <View style={{ width: "44%", flexDirection: "row-reverse", alignItems: "flex-end", }}>
            <TouchableOpacity>
              <Entypo name="dots-three-vertical" size={15} color="black" />
            </TouchableOpacity>
            <Text>    </Text>
            <TouchableOpacity onPress={progressChangeHandler}>
              <Text>
                <Feather name="minus-circle" size={12} color="black" /><Text style={styles.inputText}> {mytodo.daysbyhrs}HRS</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Progress.Bar 
        progress={presentProgress} 
        width={367}
        unfilledColor='light-grey'
        borderWidth={0}
        borderRadius={500} 
        color='#6075d1'
        style={styles.bar}
        animationType='spring' />
      </View>
    );

  }



  return (
    <View style={styles.card}>

      <TouchableOpacity
        onPress={descPressedHandler.bind(this, props.id)}
        id={props.id}
        disabled={descPressed === true ? true : false}>
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
    backgroundColor: 'white',
    borderRadius: 10,
    width: "94%",
    marginTop: 40,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    elevation: 10,
  },
  someView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 2,
    paddingHorizontal: 20

  },
  inputText: {
    fontSize: 12,
    color: 'black',
    width: '49%',
    fontFamily: 'GorditaBold'
  },
  datastyle: {
    fontSize: 11,
    fontFamily: 'GorditaRegular',
    color: 'black'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",

  },
  bar: {
    borderWidth: 0,
    height: 3,
    paddingHorizontal: 5
  }
});

export default Card;
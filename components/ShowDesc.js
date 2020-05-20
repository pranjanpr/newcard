import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ShowDesc = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.showdesc.bind(this,props.id)}>
      <Text style={styles.buttonText}> {props.desctitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: "100%",
    borderBottomColor:'blue',
  }
});

export default Card;
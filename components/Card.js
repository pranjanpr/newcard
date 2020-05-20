import React,{useState} from 'react';
import { View, StyleSheet ,Text, TouchableOpacity, Button} from 'react-native';
import TODO from '../data/dummy-data';
import {Icon} from 'react-native-elements';


let mytodo;
const Card = props => {
   
  const [descPressed, setDescPressed] = useState(false);

  const descPressedHandler = (iden) => {

      if (descPressed === true)
          setDescPressed(false);
      else{
          setDescPressed(true);
      }
       mytodo=TODO.find(function(todo,index){
        return todo.id===iden;
         })
          
  };

  let descOutput;

  if (descPressed) {
      descOutput = (
            <View>
                    <View style={styles.lowerInputView}>
                        <Text style={styles.inputText}>{mytodo.timeleft}</Text>
                        <Text style={styles.textStyle2}>{mytodo.quanta}</Text>
                    </View>
                    <View style={styles.lowerInputView}>
                        
                           <Icon name='date-range' sty/>
                          <Text style={styles.inputText}>{mytodo.deadline}</Text>
                          <TouchableOpacity>
                             <View style={{flexDirection:'row'}}>
                             <Icon name='remove-circle-outline'/>
                             <Text style={styles.textStyle2}>{mytodo.daysbyhrs}</Text>
                             </View>
                          </TouchableOpacity>

                             <Icon name='more-vert' onPress={() => console.log('hello')}/>
                             
                         
                        
                    </View>
            </View>
         );
     
 }
 


  return (
    <View style={{ ...styles.card, ...props.style }}>
    <TouchableOpacity onPress={descPressedHandler.bind(this,props.id)} id={props.id}>
   
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
    
    margin:10,
    borderWidth: 1,
    borderColor: "#D3D3D3",
   

    
  },
  lowerInputView:{
    flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',

  },
  inputText:{
    fontSize: 13,
        color: 'black',
        width: '49%',
       
  },
  mybutton:{
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
  },
  textStyle2:{
    color:'black',

  }

  
});

export default Card;
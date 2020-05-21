import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import AddTask from './screens/AddTask';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
    'GorditaBold': require('./assets/fonts/Gordita_Bold.otf'),
    'GorditaRegular': require('./assets/fonts/Gordita_Regular.otf'),
  });
};

export default function App() {

  const [loaded, setLoaded] = useState(false);
 
  if(!loaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() => setLoaded(true)} />
  }
  fetchFonts();
  return (
    <AddTask />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

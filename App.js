import React from 'react';
import { StyleSheet, View } from 'react-native';
import Question from './Question';
import Home from './Home';

export default function App (){
  return (
    <View style={styles.container}>
        <Question title={"Secu"}/>
        <Question title={"Secours"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hide: {
    display: 'none',
  },
});

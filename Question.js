import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import style from './style.css';
import boutonImage from 'bouton.png'

export default function Question({questionSecu, answersSecu, questionSecours, answersSecours}) {
    return (
        <View style={styles.question}>
            <Text>Question sécurité :</Text>
            <Text>{questionSecu}</Text>
            <View style={styles.response_hide}> 
                <Text id="placeholder">Réponse</Text>
                <Text id="correction">Réponse : {answersSecu}</Text>
            </View>
            <Button title="Affiche la question"/>

            <Text>Question premier secours :</Text>
            <Text>{questionSecours}</Text>
            <View style={styles.response_hide}> 
                <Text id="placeholder">Réponse</Text>
                <Text id="correction">Réponse : {answersSecours}</Text>
            </View>
            <Button style={{ backgroundImage: `url(${boutonImage})` }}/>
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
    question: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    response_hide: {
        backgroundColor: '#ff0000',
        borderadius: 10,
    },
    
  });
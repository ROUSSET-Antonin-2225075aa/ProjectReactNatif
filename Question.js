import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import style from './style.css';

export default function Question({title}) {
    return (
        <View style={styles.question}>
            <Text>Question {title} :</Text>
            <Text>Quelle est la couleur du feu qui signifie "arrêt" ?</Text>
            <View style={styles.response_hide}> 
                <Text id="placeholder">Réponse</Text>
                <Text id="correction">Réponse : ROUGE</Text>
            </View>
            <Button title="Affiche la question"/>
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
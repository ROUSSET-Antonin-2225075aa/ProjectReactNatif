import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import boutonImage from './assets/bouton.png';
import logo from './assets/logo.png';
import { VisibilityContext } from './Context';

export default function Question({questionSecu, answersSecu, questionSecours, answersSecours, elementVisibleSecu, elementVisibleSecours}) {
    const { setElementVisibleSecu, setElementVisibleSecours } = useContext(VisibilityContext);

    function showAnswerSecu(){
        setElementVisibleSecu(prevState => !prevState);
      }
    
      function showAnswerSecours(){
        setElementVisibleSecours(prevState => !prevState);
      }

    return (
        <View>
            <Image source={logo} style={styles.logo}/>
            <View style={styles.question}>
                <Text style={{fontSize:30}}>Question sécurité :</Text>
                <Text style={styles.text}>{questionSecu}</Text>
                <TouchableOpacity onPress={showAnswerSecu}>
                    <Image source={boutonImage} style={{ width: 250, height: 50 }} />
                </TouchableOpacity>
                {elementVisibleSecu ? (
                    <Text  style={styles.text}>Réponse : {answersSecu}</Text>
                ) : null
                }
                <Text style={{fontSize:30}}>Question premier secours :</Text>
                <Text style={styles.text}>{questionSecours}</Text>
                <TouchableOpacity onPress={showAnswerSecours}>
                    <Image source={boutonImage} style={{ width: 250, height: 50 }} />
                </TouchableOpacity>
                {elementVisibleSecours ? (
                    <Text  style={styles.text}>Réponse : {answersSecours}</Text>
                ) : null
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    question: {
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    logo: {
        width: 500,
        height: 90,
        alignSelf: 'center',
        marginBottom: 30,
    },
  });
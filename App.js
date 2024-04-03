import React, {useState} from 'react';
import { Button, StyleSheet, TouchableHighlight, View } from 'react-native';
import Question from './Question';
import Home from './Home';
import JSON from './question.json';

export default function App (){
  const [questionSecu, setQuestionSecu] = useState("Test question sécu");
  const [answersSecu, setAnswersSecu] = useState("Test");
  const [questionSecours, setQuestionSecours] = useState("Test question secours");
  const [answersSecours, setAnswersSecours] = useState("Test");

  const [elementVisible, setElementVisible] = useState(false);

  function start(){
    setElementVisible(true);
    suivantBtn();
  }

  function suivantBtn(){
    const randomNb = randomNumber(0, 4);
    const question = JSON.question[randomNb];
    setQuestionSecu(question.questionSecu);
    setAnswersSecu(question.answersSecu);
    setQuestionSecours(question.questionSecours);
    setAnswersSecours(question.answersSecours);
  }

  return (
    <View style={styles.container}>
      {!elementVisible ? (
        <TouchableHighlight onPress={() => start()}>
          <Home/>
        </TouchableHighlight>
      ) : null
      }
        {
          elementVisible ? (
            <View>
              <Question style={styles.hide} questionSecu={questionSecu} answersSecu={answersSecu} questionSecours={questionSecours} answersSecours={answersSecours}/>
              <Button style={styles.hide} title="Suivant" onPress={() => suivantBtn()}/>
            </View>
          ) : null
        }
    </View>
  );
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

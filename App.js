import React, {useState} from 'react';
import { Button, StyleSheet, TouchableHighlight, View, TouchableOpacity, Image } from 'react-native';
import Question from './Question';
import Home from './Home';
import JSON from './question.json';
import { VisibilityContext } from './Context';
import suivant from './assets/suivantBtn.png';
import retourBtn from './assets/retourBtn.png';

export default function App (){
  const [questionSecu, setQuestionSecu] = useState("Test question sécu");
  const [answersSecu, setAnswersSecu] = useState("Test");
  const [questionSecours, setQuestionSecours] = useState("Test question secours");
  const [answersSecours, setAnswersSecours] = useState("Test");

  const [elementVisibleSecu, setElementVisibleSecu] = useState(false);
  const [elementVisibleSecours, setElementVisibleSecours] = useState(false);

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

    setElementVisibleSecu(false);
    setElementVisibleSecours(false);
  }

  return (
    <View style={styles.container}>
      {!elementVisible ? (
        <TouchableHighlight onPress={() => start()} style={{flex:1}}>
          <Home/>
        </TouchableHighlight>
      ) : null
      }
      {
        elementVisible ? (
          <View>
            <VisibilityContext.Provider value={{ setElementVisibleSecu, setElementVisibleSecours }}>
              <Question questionSecu={questionSecu} answersSecu={answersSecu} questionSecours={questionSecours} answersSecours={answersSecours} elementVisibleSecu={elementVisibleSecu} elementVisibleSecours={elementVisibleSecours}/>
            </VisibilityContext.Provider>
            <TouchableOpacity onPress={suivantBtn}>
                    <Image source={suivant} style={styles.btn} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setElementVisible(false)}>
                    <Image source={retourBtn} style={styles.btn} />
              </TouchableOpacity>
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
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    height: 40,
    margin: 10,
    alignSelf: 'flex-end',
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Core() {
  return (
    <View style={styles.container}>
        <Text>Open up App.js to start working on your App!</Text>
        <StatusBar style="auto" />
        <View style={styles.question}>
            <Text>Question sécurité routiere :</Text>
            <Text>Quelle est la couleur du feu qui signifie "arrêt" ?</Text>
            <View style={styles.response_hide}> // chaner la class entre reponse-hide et reponse-show
                <Text>Rouge</Text>
                <Text>Vert</Text>
                <Text>Orange</Text>
            </View>
            <Button>Afficher la réponse</Button>
        </View>
        <View style={styles.question}>
            <Text>Question 1ers secours:</Text>
            <Text>Quelle est la couleur du feu qui signifie "arrêt" ?</Text>
            <View style={styles.response_hide}> // chaner la class entre reponse-hide et reponse-show
                <Text>Rouge</Text>
                <Text>Vert</Text>
                <Text>Orange</Text>
            </View>
            <Button>Afficher la réponse</Button>
        </View>
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
});

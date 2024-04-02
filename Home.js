import { StyleSheet, Text, View, Button, Image } from 'react-native';

function Home() {
    return (
        <View style={styles.question}>
            <Text>Need for Licence</Text>
            <Text>Hourlay's Quiz</Text>
            <Image/>
            <Text>Touchez pour commencer</Text>
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

export default Home;
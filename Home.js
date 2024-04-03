import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styles from 'style.css'
import background from './pageAcc.png'

function Home() {
    return (
        <View style={{ backgroundImage: `url(${background})` }}>
            <Text>Need for Licence</Text>
            <Text>Hourlay's Quiz</Text>
            <Image/>
            <Text className={styles.blinkAnimation}>Touchez pour commencer</Text>
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
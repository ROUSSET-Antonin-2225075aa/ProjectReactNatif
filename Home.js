import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import BlinkingText from './BlinkingText.js'
import background from './assets/pageAcc.png'

function Home() {
    return (
        <ImageBackground source={require('./assets/pageAcc.png')}  resizeMode="stretch" style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <BlinkingText />
        </ImageBackground>
    );
}
export default Home;
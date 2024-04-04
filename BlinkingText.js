import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const BlinkingText = () => {
    return (
        <View>
            <Animatable.Text
                animation="fadeIn"
                iterationCount="infinite"
                direction="alternate"
                style={{ fontSize: 20, fontWeight: 'bold' }}
            >
                Touchez pour commencer
            </Animatable.Text>
        </View>
    );
};

export default BlinkingText;
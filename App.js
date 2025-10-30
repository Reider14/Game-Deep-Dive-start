import {StyleSheet, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

    const [userNumber, setUserNumber] = useState();

    function pickedNumberHandler(pickedNumber){
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickedNumber = {pickedNumberHandler}/>

    if(userNumber){
        screen = <GameScreen/> 
    }
    return (
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScren}>
            <ImageBackground 
            source={require('./assets/Images/background.png')} 
            resizeMode="cover"
            style={styles.rootScren}
            imageStyle={styles.backgroundImage}
            >
                {screen}
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({

    rootScren: {
        flex: 1,
    },
    /*backgroundImage: {
        opacity: 0.15
    }*/
});



import {StyleSheet, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './Utils/Colors';

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
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScren}>
            <ImageBackground 
            source={require('./assets/Images/background.png')} 
            resizeMode="cover"
            style={styles.rootScren}
            imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScren} edges={['top', 'bottom']}>{screen}</SafeAreaView>
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



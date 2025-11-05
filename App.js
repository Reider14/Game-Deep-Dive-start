import {StyleSheet, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './Utils/Colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
    });

    if(!fontsLoaded){
        return <AppLoading/>;
    }

    function pickedNumberHandler(pickedNumber){
        setUserNumber(pickedNumber);
        setGameIsOver(false);
        
    }

    function gameOverHandler(){
        setGameIsOver(true);
    }

    function startnewGameHandler(){
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickedNumber = {pickedNumberHandler}/>

    if(userNumber){
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/> 
    }

    if(gameIsOver && userNumber){
        screen = < GameOverScreen 
            userNumber={userNumber} 
            roundsNumber={guessRounds} 
            onStartNewGame={startnewGameHandler}
        />
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



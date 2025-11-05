import { View, StyleSheet, Alert} from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InsctrutionsText from "../components/UI/InsctrutionText";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){

    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver();
        }
    },[currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction){      // direction =>  'lower' || 'greater' 
       
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie", 'you thats this is wrong...', [
                {text: 'Sorry!', style: 'cancel'},
            ]);
            return;
        }
       
        if(direction === 'lower' ){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>  
                <InsctrutionsText style={styles.InsctrutionsText}>Higher or Lower</InsctrutionsText>  {/* cloning a css in react native*/}
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton 
                            onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color={'white'}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton 
                            onPress={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name="add" size={24} color={'white'}/>
                            </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
               
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    InsctrutionsText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1 
    }
})
import { View, TextInput, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../Utils/Colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InsctrutionsText from "../components/UI/InsctrutionText";



    function StartGameScreen({onPickedNumber}) {
  
        const [enteredNumber, setEnteredNumber] = useState('');

        function enteredNumberHandler(enteredNumber){
            setEnteredNumber(enteredNumber);
        }

        function resetInputHandler(){
            setEnteredNumber('');
        }

        function inputConfirmHandler(){
            const choseNumber = parseInt(enteredNumber)

            if (isNaN(choseNumber) ||  choseNumber <= 0 || choseNumber > 99){
                //Show alert
                Alert.alert(
                    'Invalid number!',
                    'Number has to been a number between 1 a 99.',
                    [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
                );
                return;
            }

            onPickedNumber(choseNumber);
        }
        return (
            <SafeAreaView style={styles.areaContainer} edges={['left', 'right', 'bottom', 'right']}>
            <View style={styles.rootContainer}>
                <Title>Guess My Number</Title>
                <Card>
                    <InsctrutionsText>Enter a Number</InsctrutionsText>
                    <TextInput 
                        style={styles.inputNumber} 
                        maxLength={2} 
                        keyboardType="number-pad"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={enteredNumberHandler}
                        value={enteredNumber}
                    /> 

                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={inputConfirmHandler}>Confirm</PrimaryButton>
                        </View>
                    </View>
                </Card>

            </View>
            </SafeAreaView>
        );
    }


    export default StartGameScreen;

    const styles = StyleSheet.create({
        rootContainer: {
            flex: 1,
            marginTop: 100,
            alignItems: 'center'
        },
        inputNumber: {
            height: 50,
            width: 50,
            fontSize: 32,
            borderBottomColor: Colors.accent500,
            borderBottomWidth: 2,
            color: Colors.accent500,
            marginVertical: 8,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        buttonsContainer: {
            flexDirection: 'row'
        },
        buttonContainer: {
            flex: 1
        },
        areaContainer: {
            flex: 1
        }
    });
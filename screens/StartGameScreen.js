    import { View, TextInput, StyleSheet, Alert } from "react-native";
    import PrimaryButton from "../components/UI/PrimaryButton";
    import { useState } from "react";

import Colors from "../Utils/Colors";



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
            <View style={styles.inputContainer}>

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

            </View>
        );
    }


    export default StartGameScreen;

    const styles = StyleSheet.create({

        inputContainer: {
            //flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
            marginHorizontal: 16,
            padding: 16,
            backgroundColor: Colors.primary800,
            borderRadius: 8,
            elevation: 4,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 6,
            shadowOpacity: 0.85
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
        }
    });
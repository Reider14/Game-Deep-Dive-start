import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
// cwe cannssundiausdihuiahsidhihshad
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.inputNumber} 
            maxLength={2} 
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}/> 
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor: '#4e0329',
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
        borderBottomColor: '#ddb51f',
        borderBottomWidth: 2,
        color: '#ddb51f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
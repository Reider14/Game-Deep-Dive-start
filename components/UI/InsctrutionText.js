import { Text, StyleSheet, View } from "react-native";

import Colors from "../../Utils/Colors";

function InsctrutionsText({children, style}){
    return <Text style={[styles.instructionsText, style]}>{children}</Text>
}


const styles = StyleSheet.create({
    instructionsText:{
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
        },
})


export default InsctrutionsText;
import { View, StyleSheet } from "react-native";

import Colors from "../../Utils/Colors";

function Card({children}){
    return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
    card: {
            //flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 36,
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
})


export default Card;


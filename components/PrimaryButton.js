import { View, Text, Pressable, StyleSheet} from "react-native";

function PrimaryButton({children, onPress}) {   //we can use dsa

    
    return ( 
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            style={({pressed}) => pressed ? [
                styles.buttonInnerContainer, styles.pressed
            ] :styles.buttonInnerContainer} 
            onPress={onPress} 
            android_ripple={{color: '#640233'}}>

                <Text style={styles.textContainer}>{children}</Text>     
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden' // any effct out of this container is not visible
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 0},
        shadowOpacity: 0.25,
        },
        textContainer: {
            color: 'white',
            textAlign: 'center' // alinhar o text
        },
        pressed: {
            opacity: 0.75
        }
    }
)
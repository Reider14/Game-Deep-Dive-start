import { View, Text} from "react-native";

function PrimaryButton({children}) {   //we can use dsa
    return (
        <View>
            <Text>{children}</Text>     
        </View>
    );
}

export default PrimaryButton;
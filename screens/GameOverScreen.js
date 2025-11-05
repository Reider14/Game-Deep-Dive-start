import { Text, StyleSheet, View } from "react-native";

function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Text>The Game is Over</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
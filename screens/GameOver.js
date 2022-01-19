import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

export default function GameOver(props) {
  return (
    <View style={styles.screen}>
      <TitleText>GAME OVER</TitleText>
      <View style={styles.imageView}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.finalMessage}>
          Your phone needed <Text style={styles.highlight}>{props.roundNumber}</Text> rounds to
          guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onNewGame}>New Game</MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageView: {
    borderRadius: 150,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: 300,
    borderColor: "#999",
    borderWidth: 1,
    marginVertical: 30,
    overflow: "hidden",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  finalMessage: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 15,
  },
  resultContainer: {
    width: "60%",
  },
});

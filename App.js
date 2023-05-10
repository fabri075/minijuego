import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import StartGame from "./src/screens/StartGame";
import GameScreen from "./src/screens/GameScreen";
import { useState } from "react";
import { useFonts } from "expo-font";
import ResultScreen from "./src/screens/ResultScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [winOrLose, setWinOrLose] = useState(false);
  const [result, setResult] = useState("");
  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleGameResult = (selection, number) => {
    if (
      (selection === "lower" && userNumber < number) ||
      (selection === "higher" && userNumber > number)
    ) {
      setResult("win");
    } else {
      setResult("lose");
    }
    setWinOrLose(true);
  };

  let content = <StartGame onStartGame={handleStartGame} />;

  if (userNumber && winOrLose === true) {
    content = <ResultScreen result={result} />;
  } else if (userNumber) {
    content = <GameScreen handleResult={handleGameResult} />;
  }
  return (
    <View style={styles.container}>
      <Header title={"Adivina el numero"} newStyles={styles.headerTitle} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
  },
});

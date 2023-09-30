import { Button, Image, StyleSheet, Text, View, ViewBase } from "react-native";
import Lab1_1 from "./component/Lab1_1";
//import Lab1_2 from "./component/Lab1_2";
//import Lab1_3 from "./component/Lab1_3";
//import Lab1_4 from "./component/Lab1_4";

export default function App() {
  return (
    <View style={styles.container}>
      { <Lab1_1 /> }
      {/* <Lab1_2 />; */}
      {/* <Lab1_3 />; */}
      <Lab1_4 />;
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});

import { Button, Image, StyleSheet, Text, View } from "react-native";
import CircleImg from "../assets/circle.png";
import { LinearGradient } from "expo-linear-gradient";

export default function Lab1_1() {
  return (
    <LinearGradient
      style={styles.a}
      locations={[0.0003, 0.3021, 0.8542, 1]}
      colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
    >
      <View style={styles.container}>
        <Image style={styles.img} source={CircleImg} />
        <View>
          <Text style={styles.text}>GROW </Text>
          <Text style={styles.text1}> YOUR BUSINESS</Text>
        </View>
        <Text style={styles.text2}>
          We will help you to grow your business using online server
        </Text>
        <View style={styles.divButton}>
          <Button title="LOGIN" color="#E3C000" />
          <Button title="SIGN UP" color="#E3C000" />
        </View>
        <Text style={styles.text3}>HOW WE WORK?</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 140,
    height: 140,
    marginHorizontal: 110,
    marginTop: 69,
  },
  text: {
    maxWidth: 189,
    fontSize: 25,
    fontWeight: 700,
    textAlign: "center",
    color: "#000",
    marginTop: 66,
  },
  text1: {
    maxWidth: 250,
    fontSize: 25,
    fontWeight: 700,
    textAlign: "center",
    color: "#000",
  },
  text2: {
    maxWidth: 302,
    fontSize: 15,
    fontWeight: 700,
    color: "#000",
    alignItems: "center",
    textAlign: "center",
    marginTop: 50,
  },
  divButton: {
    flexDirection: "row",
    gap: 56,
    marginTop: 50,
  },
  text3: {
    marginTop: 21,
    fontSize: 18,
    fontWeight: 700,
  },
  a: {
    height: "100%",
    // flexDirection: "row",
    alignItems: "center",
  },
});

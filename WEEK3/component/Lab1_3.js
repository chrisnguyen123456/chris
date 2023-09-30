import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import keyImg from "../assets/key.png";
import emailImg from "../assets/email.png";

const Lab1_3 = () => {
  const width = "100%";
  return (
    <LinearGradient
      style={styles.a}
      locations={[0.0003, 0.3021, 0.8542, 1]}
      colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
    >
      <View style={styles.container}>
        <Image style={styles.img} source={keyImg} />
        <View>
          <Text style={styles.text}>FORGET</Text>
          <Text style={styles.text1}>PASSWORD</Text>
        </View>
        <Text style={styles.text2}>
          Provide your account’s email for which you want to reset your password
        </Text>
        <TextInput placeholder="Email" style={styles.input} />
        <Image style={styles.email} source={emailImg} />

        <View style={styles.styleButton}>
          <Button title="NEXT" color="#E3C000" style={{ width }} />
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  a: {
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  img: {
    width: 105,
    height: 117,
    marginHorizontal: 110,
    marginTop: 76,
  },
  text: {
    maxWidth: 189,
    fontSize: 25,
    fontWeight: 700,
    textAlign: "center",
    color: "#000",
    marginTop: 37,
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
    fontSize: 14,
    fontWeight: 700,
    color: "#000",
    alignItems: "center",
    textAlign: "center",
    marginTop: 50,
  },
  input: {
    paddingVertical: 14,
    paddingLeft: 50,
    borderColor: "#C4C4C4",
    backgroundColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 20,
    width: 305,
    marginBottom: 43,
  },
  email: {
    position: "absolute",
    width: 40,
    height: 37,
    top: 412,
    left: 50,
  },
  styleButton: {
    width: 305,
    height: 45,
  },
});
export default Lab1_3;

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Lab1_4 = () => {
  return (
    <LinearGradient
      style={styles.a}
      locations={[0.0003, 0.3021, 0.8542, 1]}
      colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
    >
      <View style={styles.container}>
        <Text style={styles.text}>CODE</Text>
        <Text style={styles.text1}>VERIFICATION</Text>
        <Text style={styles.text2}>
          Enter ontime password sent on ++849092605798
        </Text>
        <View style={styles.listCode}>
          <View style={styles.frameChildShadowBox} />
          <View style={styles.frameChildShadowBox} />
          <View style={styles.frameChildShadowBox} />
          <View style={styles.frameChildShadowBox} />
          <View style={styles.frameChildShadowBox} />
          <View style={styles.frameChildShadowBox} />
        </View>
        <View style={styles.styleButton}>
          <Button title="VERIFY CODE" color="#E3C000" style={{ padding: 15 }} />
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
  },
  text: {
    fontSize: 60,
    fontweight: "bold",
    lineHeight: 70.31,
    marginTop: 113,
    marginBottom: 62,
  },
  text1: {
    fontweight: "bold",
    fontSize: 20,
    lineHeight: 23.44,
    marginBottom: 40,
  },
  text2: {
    fontSize: 15,
    fontWeight: 700,
    maxWidth: 302,
    textAlign: "center",
    marginBottom: 40,
  },
  listCode: {
    flexDirection: "row",
    marginBottom: 45,
  },
  frameChildShadowBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  styleButton: {
    width: 339,
    height: 50,
  },
});

export default Lab1_4;

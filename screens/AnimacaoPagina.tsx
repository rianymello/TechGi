import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AnimacaoPagina = () => {
  return (
    <View style={styles.animacaoPagina1}>
      <Text style={styles.firstSteps}>First Steps</Text>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  firstSteps: {
    top: 556,
    left: 108,
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  logoIcon: {
    top: 255,
    left: 90,
    width: 234,
    height: 280,
    position: "absolute",
  },
  animacaoPagina1: {
    backgroundColor: Color.colorIndianred_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AnimacaoPagina;

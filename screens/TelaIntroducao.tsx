import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TelaIntroducao = () => {
  return (
    <View style={styles.telaIntroducao}>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo2.png")}
      />
      <Text style={styles.firstSteps}>First Steps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoIcon: {
    top: 255,
    left: 90,
    width: 234,
    height: 280,
    position: "absolute",
  },
  firstSteps: {
    top: 551,
    left: 105,
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  telaIntroducao: {
    backgroundColor: Color.colorIndianred_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TelaIntroducao;

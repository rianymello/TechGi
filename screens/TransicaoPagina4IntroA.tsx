import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TransicaoPagina4IntroA = () => {
  return (
    <View style={styles.transicaoPagina4IntroA}>
      <View style={styles.bemVindoAoNomeDoApp}>
        <Text style={[styles.firstSteps, styles.welcomeToLayout]}>
          First Steps
        </Text>
        <Text style={[styles.welcomeTo, styles.welcomeToLayout]}>{`Welcome to
  `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeToLayout: {
    height: 36,
    color: Color.colorWhite,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_16xl,
    left: 0,
    width: 184,
    position: "absolute",
  },
  firstSteps: {
    top: 43,
    textAlign: "center",
  },
  welcomeTo: {
    top: 0,
    textAlign: "left",
  },
  bemVindoAoNomeDoApp: {
    top: 387,
    left: 85,
    height: 79,
    width: 184,
    position: "absolute",
  },
  transicaoPagina4IntroA: {
    backgroundColor: Color.colorLightpink_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TransicaoPagina4IntroA;

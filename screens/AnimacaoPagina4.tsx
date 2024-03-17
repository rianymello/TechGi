import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const AnimacaoPagina4 = () => {
  return (
    <View style={styles.animacaoPagina5}>
      <Image
        style={[styles.animacaoPagina5Child, styles.animacaoLayout]}
        contentFit="cover"
        source={require("../assets/vector-105.png")}
      />
      <Image
        style={[styles.animacaoPagina5Item, styles.animacaoLayout]}
        contentFit="cover"
        source={require("../assets/vector-106.png")}
      />
      <Image
        style={[styles.animacaoPagina5Inner, styles.animacaoLayout]}
        contentFit="cover"
        source={require("../assets/vector-107.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-108.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animacaoLayout: {
    height: 148,
    width: 391,
    left: 0,
    position: "absolute",
  },
  animacaoPagina5Child: {
    top: -121,
  },
  animacaoPagina5Item: {
    top: -116,
  },
  animacaoPagina5Inner: {
    top: -108,
  },
  vectorIcon: {
    top: -96,
    width: 390,
    height: 940,
    left: 0,
    position: "absolute",
  },
  animacaoPagina5: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AnimacaoPagina4;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const AnimacaoPagina2 = () => {
  return (
    <View style={styles.animacaoPagina3}>
      <Image
        style={styles.detalhesAnimacao3}
        contentFit="cover"
        source={require("../assets/detalhes--animacao-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detalhesAnimacao3: {
    position: "absolute",
    top: 328,
    left: 0,
    width: 391,
    height: 516,
  },
  animacaoPagina3: {
    backgroundColor: Color.colorIndianred_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AnimacaoPagina2;

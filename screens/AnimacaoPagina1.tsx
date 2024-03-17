import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const AnimacaoPagina1 = () => {
  return (
    <View style={styles.animacaoPagina2}>
      <Image
        style={styles.detalhesAnimacao2}
        contentFit="cover"
        source={require("../assets/detalhes--animacao-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detalhesAnimacao2: {
    position: "absolute",
    top: 560,
    left: 0,
    width: 391,
    height: 284,
  },
  animacaoPagina2: {
    backgroundColor: Color.colorIndianred_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AnimacaoPagina1;

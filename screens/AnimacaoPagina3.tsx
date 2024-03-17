import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const AnimacaoPagina3 = () => {
  return (
    <View style={styles.animacaoPagina4}>
      <Image
        style={styles.detalhesAnimacao4}
        contentFit="cover"
        source={require("../assets/detalhes-transicao2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detalhesAnimacao4: {
    position: "absolute",
    top: 17,
    left: 0,
    width: 391,
    height: 827,
  },
  animacaoPagina4: {
    backgroundColor: Color.colorIndianred_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AnimacaoPagina3;

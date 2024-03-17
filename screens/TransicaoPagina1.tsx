import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const TransicaoPagina1 = () => {
  return (
    <View style={styles.transicaoPagina2}>
      <Image
        style={styles.detalhesTransicaoIcon}
        contentFit="cover"
        source={require("../assets/detalhes-transicao1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detalhesTransicaoIcon: {
    position: "absolute",
    top: 328,
    left: 0,
    width: 391,
    height: 530,
  },
  transicaoPagina2: {
    backgroundColor: Color.colorLinen_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TransicaoPagina1;

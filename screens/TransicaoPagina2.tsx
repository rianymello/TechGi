import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const TransicaoPagina2 = () => {
  return (
    <View style={styles.transicaoPagina3}>
      <Image
        style={styles.detalhesTransicaoIcon}
        contentFit="cover"
        source={require("../assets/detalhes-transicao2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detalhesTransicaoIcon: {
    position: "absolute",
    top: 17,
    left: 0,
    width: 391,
    height: 827,
  },
  transicaoPagina3: {
    backgroundColor: Color.colorLinen_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TransicaoPagina2;

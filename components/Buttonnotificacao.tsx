import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

export type ButtonnotificacaoType = {
  onClose?: () => void;
};

const Buttonnotificacao = ({ onClose }: ButtonnotificacaoType) => {
  return (
    <View style={styles.buttonnotificacao}>
      <View style={[styles.notificacao, styles.notificacaoLayout]}>
        <View style={[styles.retanguloNotificacao, styles.notificacaoLayout]} />
        <Image
          style={styles.circuloNotificacao}
          contentFit="cover"
          source={require("../assets/circulo--notificacao1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificacaoLayout: {
    height: 21,
    position: "absolute",
    width: 53,
  },
  retanguloNotificacao: {
    top: 21,
    left: 53,
    borderRadius: Border.br_32xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  circuloNotificacao: {
    top: 2,
    left: 2,
    width: 17,
    height: 17,
    position: "absolute",
  },
  notificacao: {
    top: 12,
    left: 0,
  },
  buttonnotificacao: {
    height: 40,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 53,
  },
});

export default Buttonnotificacao;

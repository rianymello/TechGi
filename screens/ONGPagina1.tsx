import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ONGPagina1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.ongPagina1}>
      <LinearGradient
        style={[styles.fundoDaPaginaOng, styles.ongPosition]}
        locations={[0, 1]}
        colors={["#fff", "rgba(255, 255, 255, 0)"]}
      />
      <Image
        style={styles.detalhesIcon}
        contentFit="cover"
        source={require("../assets/detalhes3.png")}
      />
      <Image
        style={[styles.navegationIcon, styles.ongPosition]}
        contentFit="cover"
        source={require("../assets/navegation5.png")}
      />
      <View style={[styles.telaOng, styles.ongPosition]}>
        <View style={[styles.retanguloOng2, styles.retanguloLayout]} />
        <Text
          style={[styles.keywordsAboutThe, styles.keywordsTypo]}
        >{`keywords about the ONG
`}</Text>
        <Text style={[styles.ong2, styles.ongTypo]}>ONG 2</Text>
        <Pressable
          style={[styles.retanguloOng1, styles.retanguloLayout]}
          onPress={() => navigation.navigate("ONGPagina")}
        />
        <Text
          style={[styles.keywordsAboutThe1, styles.keywordsTypo]}
        >{`keywords about the ONG
`}</Text>
        <Text style={[styles.ong1, styles.ongTypo]}>ONG 1</Text>
      </View>
      <Image
        style={styles.linhaOngIcon}
        contentFit="cover"
        source={require("../assets/linha--ong-1.png")}
      />
      <Text style={styles.ongTitulo}>{`ONG `}</Text>
      <Pressable
        style={styles.setaParaVoltarPaginaPerfil}
        onPress={() => navigation.navigate("PerfilPagina1Notificatio")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/seta-para-voltar-pagina-perfil.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ongPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  retanguloLayout: {
    height: 130,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xl,
    left: 27,
    position: "absolute",
  },
  keywordsTypo: {
    width: 288,
    color: Color.colorGray_100,
    fontFamily: FontFamily.josefinSansLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  ongTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  fundoDaPaginaOng: {
    top: 0,
    height: 776,
    opacity: 0.91,
    backgroundColor: "transparent",
  },
  detalhesIcon: {
    top: -193,
    left: -136,
    width: 856,
    height: 1375,
    position: "absolute",
  },
  navegationIcon: {
    top: 775,
    height: 69,
  },
  retanguloOng2: {
    top: 393,
    width: 334,
  },
  keywordsAboutThe: {
    top: 365,
    left: 29,
  },
  ong2: {
    top: 342,
    left: 27,
  },
  retanguloOng1: {
    top: 157,
    width: 338,
  },
  keywordsAboutThe1: {
    top: 129,
    left: 34,
  },
  ong1: {
    top: 107,
    left: 32,
  },
  telaOng: {
    top: 202,
    height: 574,
    overflow: "hidden",
  },
  linhaOngIcon: {
    top: 221,
    left: 130,
    maxHeight: "100%",
    width: 276,
    position: "absolute",
  },
  ongTitulo: {
    top: 64,
    left: 44,
    fontSize: FontSize.size_101xl,
    fontWeight: "700",
    fontFamily: FontFamily.balooBhaijaan2Bold,
    color: Color.colorIndianred_200,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  setaParaVoltarPaginaPerfil: {
    top: 44,
    width: 29,
    height: 19,
    left: 27,
    position: "absolute",
  },
  ongPagina1: {
    backgroundColor: Color.colorLinen_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ONGPagina1;

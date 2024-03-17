import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PerfilPagina = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.perfilPagina2}>
      <Image
        style={styles.detalhesIcon}
        contentFit="cover"
        source={require("../assets/detalhes1.png")}
      />
      <Image
        style={styles.navegationIcon}
        contentFit="cover"
        source={require("../assets/navegation1.png")}
      />
      <Image
        style={styles.perfilIcon}
        contentFit="cover"
        source={require("../assets/perfil.png")}
      />
      <View style={styles.textosParaPerfil}>
        <LinearGradient
          style={styles.retanguloPerfil}
          locations={[0, 1]}
          colors={["#fff", "rgba(255, 255, 255, 0)"]}
        />
        <Text style={[styles.passowordTexto, styles.textoTypo1]}>
          passoword
        </Text>
        <View style={[styles.linhaSenha, styles.linhaLayout]} />
        <Image
          style={styles.olhoFechado}
          contentFit="cover"
          source={require("../assets/olho-fechado.png")}
        />
        <Image
          style={[styles.lapisEdicaoSenha, styles.lapisLayout]}
          contentFit="cover"
          source={require("../assets/lapis-edicao--senha.png")}
        />
        <Text style={[styles.texto, styles.textoTypo]}>**********</Text>
        <Text style={[styles.emailTexto, styles.textoTypo1]}>email</Text>
        <View style={[styles.linhaEmail, styles.linhaLayout]} />
        <Image
          style={[styles.lapisEdicaoEmail, styles.lapisLayout]}
          contentFit="cover"
          source={require("../assets/lapis-edicao--senha.png")}
        />
        <Text style={[styles.josefinsansgmailcomTextx, styles.textoTypo]}>
          josefin.sans@gmail.com
        </Text>
        <Text style={styles.ageTexto}>age</Text>
        <View style={[styles.linhaIdade, styles.linhaLayout]} />
        <Image
          style={[styles.lapisEdicaoIdade, styles.lapisLayout]}
          contentFit="cover"
          source={require("../assets/lapis-edicao--senha.png")}
        />
        <Text style={[styles.texto1, styles.textoTypo]}>37</Text>
        <Text style={[styles.nameTexto, styles.textoTypo1]}>name</Text>
        <View style={[styles.linhaNome, styles.linhaLayout]} />
        <Image
          style={[styles.lapisEdicaoNome, styles.lapisLayout]}
          contentFit="cover"
          source={require("../assets/lapis-edicao--senha.png")}
        />
        <Text style={[styles.josefinaS, styles.textoTypo]}>Josefina S.</Text>
      </View>
      <Text style={[styles.editProfile, styles.textoTypo1]}>Edit Profile</Text>
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
  textoTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  linhaLayout: {
    height: 1,
    width: 235,
    borderTopWidth: 1,
    borderColor: Color.colorGray_200,
    left: 13,
    borderStyle: "solid",
    position: "absolute",
  },
  lapisLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "71.34%",
    right: "23.69%",
    width: "4.97%",
    height: "4.37%",
    position: "absolute",
    overflow: "hidden",
  },
  textoTypo: {
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_mini,
    left: 16,
    position: "absolute",
  },
  detalhesIcon: {
    top: -228,
    left: -207,
    width: 927,
    height: 1410,
    position: "absolute",
  },
  navegationIcon: {
    top: 775,
    width: 390,
    height: 69,
    left: 0,
    position: "absolute",
  },
  perfilIcon: {
    top: 116,
    left: 96,
    width: 197,
    height: 197,
    position: "absolute",
  },
  retanguloPerfil: {
    top: 0,
    borderRadius: Border.br_5xs,
    borderColor: Color.colorWhite,
    borderWidth: 1,
    opacity: 0.91,
    backgroundColor: "transparent",
    borderStyle: "solid",
    height: 357,
    width: 314,
    left: 0,
    position: "absolute",
  },
  passowordTexto: {
    top: 263,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_mini,
    left: 16,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
  },
  linhaSenha: {
    top: 254,
  },
  olhoFechado: {
    top: 249,
    left: 259,
    width: 23,
    height: 9,
    position: "absolute",
  },
  lapisEdicaoSenha: {
    top: "65.83%",
    bottom: "29.8%",
  },
  texto: {
    top: 241,
  },
  emailTexto: {
    top: 202,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_mini,
    left: 16,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
  },
  linhaEmail: {
    top: 193,
  },
  lapisEdicaoEmail: {
    top: "48.46%",
    bottom: "47.17%",
  },
  josefinsansgmailcomTextx: {
    top: 169,
  },
  ageTexto: {
    top: 136,
    left: 13,
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  linhaIdade: {
    top: 127,
  },
  lapisEdicaoIdade: {
    top: "30.25%",
    bottom: "65.38%",
  },
  texto1: {
    top: 108,
  },
  nameTexto: {
    top: 75,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_mini,
    left: 16,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
  },
  linhaNome: {
    top: 66,
  },
  lapisEdicaoNome: {
    top: "12.89%",
    bottom: "82.75%",
  },
  josefinaS: {
    top: 42,
  },
  textosParaPerfil: {
    top: 342,
    left: 38,
    height: 357,
    width: 314,
    position: "absolute",
  },
  editProfile: {
    top: 730,
    left: 23,
    fontSize: FontSize.size_7xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  setaParaVoltarPaginaPerfil: {
    left: 27,
    top: 44,
    width: 29,
    height: 19,
    position: "absolute",
  },
  perfilPagina2: {
    backgroundColor: Color.colorLinen_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default PerfilPagina;

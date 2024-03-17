import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ONGPagina = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.ongPagina2}>
      <LinearGradient
        style={[styles.fundoTelaOng, styles.fundoTelaOngPosition]}
        locations={[0, 1]}
        colors={["#fff", "rgba(255, 255, 255, 0)"]}
      />
      <Image
        style={styles.detalhesIcon}
        contentFit="cover"
        source={require("../assets/detalhes2.png")}
      />
      <Image
        style={[styles.navegationIcon, styles.fundoTelaOngPosition]}
        contentFit="cover"
        source={require("../assets/navegation1.png")}
      />
      <Image
        style={styles.linhaOng1}
        contentFit="cover"
        source={require("../assets/linha--ong-1.png")}
      />
      <Text style={styles.ong1}>ONG 1</Text>
      <Pressable
        style={styles.setaParaVoltarPaginaPerfil}
        onPress={() => navigation.navigate("ONGPagina1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/seta-para-voltar-pagina-perfil.png")}
        />
      </Pressable>
      <View style={styles.informacoesOng}>
        <Text style={[styles.descriptionOng, styles.ongTypo]}>
          Information/Description about the ONG............
        </Text>
        <Text style={[styles.phoneTexto, styles.phoneTypo]}>12345-6789</Text>
        <Text style={[styles.phoneTexto1, styles.phoneTypo]}>PHONE:</Text>
        <Text style={[styles.wwwongcomSite, styles.siteTypo]}>www.ONG.com</Text>
        <Text style={[styles.siteTexto, styles.siteTypo]}>SITE:</Text>
        <Text style={[styles.texto, styles.textoTypo]}>25</Text>
        <Text
          style={[styles.streetXxxxxxxNumber, styles.textoTypo]}
        >{`Street, XXXXXXXXXX, number `}</Text>
        <Text style={[styles.locationTexto, styles.ongTypo]}>LOCATION:</Text>
        <Text style={[styles.ongName, styles.ongTypo]}>{`ONG `}</Text>
        <Text style={[styles.nameTexto, styles.ongTypo]}>NAME:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fundoTelaOngPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  ongTypo: {
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  phoneTypo: {
    top: 96,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  siteTypo: {
    top: 70,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  textoTypo: {
    width: 236,
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  fundoTelaOng: {
    height: 776,
    opacity: 0.91,
    backgroundColor: "transparent",
    top: 0,
  },
  detalhesIcon: {
    top: -227,
    left: -179,
    width: 899,
    height: 1409,
    position: "absolute",
  },
  navegationIcon: {
    top: 775,
    height: 69,
  },
  linhaOng1: {
    top: 221,
    left: 130,
    maxHeight: "100%",
    width: 276,
    position: "absolute",
  },
  ong1: {
    top: 64,
    left: 44,
    fontSize: FontSize.size_101xl,
    fontWeight: "700",
    fontFamily: FontFamily.balooBhaijaan2Bold,
    textAlign: "left",
    color: Color.colorIndianred_200,
    position: "absolute",
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
  descriptionOng: {
    top: 134,
    left: 1,
    width: 314,
    color: Color.colorGray_200,
  },
  phoneTexto: {
    left: 76,
    color: Color.colorGray_200,
  },
  phoneTexto1: {
    color: Color.colorIndianred_200,
    left: 0,
  },
  wwwongcomSite: {
    left: 46,
    color: Color.colorGray_200,
  },
  siteTexto: {
    color: Color.colorIndianred_200,
    left: 0,
  },
  texto: {
    top: 45,
    left: 0,
    width: 236,
  },
  streetXxxxxxxNumber: {
    top: 25,
    left: 103,
  },
  locationTexto: {
    top: 26,
    color: Color.colorIndianred_200,
    left: 0,
  },
  ongName: {
    left: 67,
    color: Color.colorGray_200,
    top: 0,
  },
  nameTexto: {
    color: Color.colorIndianred_200,
    left: 0,
    top: 0,
  },
  informacoesOng: {
    top: 286,
    left: 20,
    width: 339,
    height: 168,
    position: "absolute",
  },
  ongPagina2: {
    backgroundColor: Color.colorLinen_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ONGPagina;

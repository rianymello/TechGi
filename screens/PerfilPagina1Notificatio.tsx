import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Buttonnotificacao from "../components/Buttonnotificacao";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const PerfilPagina1Notificatio = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [notificacaoContainerVisible, setNotificacaoContainerVisible] =
    useState(false);

  const openNotificacaoContainer = useCallback(() => {
    setNotificacaoContainerVisible(true);
  }, []);

  const closeNotificacaoContainer = useCallback(() => {
    setNotificacaoContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.perfilPagina1Notificatio}>
        <Image
          style={styles.detalhesIcon}
          contentFit="cover"
          source={require("../assets/detalhes.png")}
        />
        <Image
          style={[styles.navegationIcon, styles.josefinaSPosition]}
          contentFit="cover"
          source={require("../assets/navegation.png")}
        />
        <View style={[styles.textosParaPerfil, styles.perfilLayout]}>
          <LinearGradient
            style={[styles.retanguloPaginaDoPerfil, styles.retanguloBorder]}
            locations={[0, 1]}
            colors={["#fff", "rgba(255, 255, 255, 0)"]}
          />
          <Pressable
            style={[styles.ongTextoContainer, styles.age32Position]}
            onPress={() => navigation.navigate("ONGPagina1")}
          >
            <Text style={[styles.ong, styles.textoTypo]}>-ONG</Text>
          </Pressable>
          <Text style={[styles.helpTexto, styles.textoTypo]}>-Help</Text>
          <Text style={[styles.notificationsTexto, styles.textoTypo]}>
            -Notifications
          </Text>
          <Text style={[styles.logOut, styles.textoTypo]}>-Log out</Text>
          <Text style={[styles.shareWithFriends, styles.textoTypo]}>
            -Share with friends
          </Text>
          <Pressable
            style={styles.editProfileContainer}
            onPress={() => navigation.navigate("PerfilPagina")}
          >
            <Text style={[styles.editProfile, styles.textoTypo]}>
              -Edit Profile
            </Text>
          </Pressable>
        </View>
        <View style={styles.perfil}>
          <Text style={[styles.age32, styles.textoTypo]}>age 32</Text>
          <Text style={[styles.josefinaS, styles.textoTypo]}>Josefina S.</Text>
          <Image
            style={styles.circuloPerfil}
            contentFit="cover"
            source={require("../assets/circulo--perfil.png")}
          />
          <Image
            style={styles.personPerfil}
            contentFit="cover"
            source={require("../assets/person--perfil.png")}
          />
        </View>
        <Pressable
          style={[styles.notificacao, styles.notificacaoLayout]}
          onPress={openNotificacaoContainer}
        >
          <View
            style={[styles.retanguloNotificacao, styles.notificacaoLayout]}
          />
          <Image
            style={styles.circuloNotificacao}
            contentFit="cover"
            source={require("../assets/circulo--notificacao.png")}
          />
        </Pressable>
        <Text style={[styles.profileTexto, styles.textoTypo]}>Profile</Text>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={notificacaoContainerVisible}
      >
        <View style={styles.notificacaoContainerOverlay}>
          <Pressable
            style={styles.notificacaoContainerBg}
            onPress={closeNotificacaoContainer}
          />
          <Buttonnotificacao onClose={closeNotificacaoContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  josefinaSPosition: {
    left: 0,
    position: "absolute",
  },
  perfilLayout: {
    height: 266,
    width: 314,
    position: "absolute",
  },
  retanguloBorder: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    top: 0,
    left: 0,
  },
  age32Position: {
    top: 214,
    position: "absolute",
  },
  textoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
  },
  notificacaoLayout: {
    height: 21,
    width: 53,
    position: "absolute",
  },
  detalhesIcon: {
    top: -228,
    left: -207,
    width: 940,
    height: 1410,
    position: "absolute",
  },
  navegationIcon: {
    top: 774,
    width: 390,
    height: 70,
  },
  retanguloPaginaDoPerfil: {
    borderRadius: Border.br_5xs,
    opacity: 0.91,
    backgroundColor: "transparent",
    height: 266,
    width: 314,
    position: "absolute",
  },
  ong: {
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_xl,
  },
  ongTextoContainer: {
    left: 14,
  },
  helpTexto: {
    top: 177,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_xl,
    left: 14,
    position: "absolute",
  },
  notificationsTexto: {
    top: 66,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_xl,
    left: 14,
    position: "absolute",
  },
  logOut: {
    top: 140,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_xl,
    left: 14,
    position: "absolute",
  },
  shareWithFriends: {
    top: 103,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_xl,
    left: 14,
    position: "absolute",
  },
  editProfile: {
    width: 134,
    height: 15,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_xl,
  },
  editProfileContainer: {
    top: 34,
    left: 14,
    position: "absolute",
  },
  textosParaPerfil: {
    top: 368,
    left: 38,
  },
  age32: {
    left: 92,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    top: 214,
    position: "absolute",
  },
  josefinaS: {
    top: 163,
    fontSize: FontSize.size_31xl,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    left: 0,
    position: "absolute",
  },
  circuloPerfil: {
    left: 47,
    width: 138,
    height: 138,
    top: 0,
    position: "absolute",
  },
  personPerfil: {
    height: "31.14%",
    width: "30.73%",
    top: "14.37%",
    right: "34.83%",
    bottom: "54.5%",
    left: "34.44%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  perfil: {
    top: 111,
    left: 79,
    width: 232,
    height: 229,
    position: "absolute",
  },
  notificacaoContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  notificacaoContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  retanguloNotificacao: {
    borderRadius: Border.br_32xl,
    backgroundColor: Color.colorLightpink_300,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    top: 0,
    left: 0,
  },
  circuloNotificacao: {
    top: 2,
    left: 34,
    width: 17,
    height: 17,
    position: "absolute",
  },
  notificacao: {
    top: 433,
    left: 273,
  },
  profileTexto: {
    top: 730,
    left: 23,
    fontSize: FontSize.size_7xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  perfilPagina1Notificatio: {
    backgroundColor: Color.colorLinen_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PerfilPagina1Notificatio;

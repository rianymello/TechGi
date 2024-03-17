import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LogIn1Pagina = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.logIn1Pagina}>
      <View style={[styles.detalhe, styles.detalheLayout]}>
        <View style={[styles.detalheChild, styles.detalhePosition]} />
        <View style={[styles.detalheItem, styles.detalhePosition]} />
        <View style={[styles.detalheInner, styles.detalheLayout]} />
      </View>
      <Pressable
        style={styles.logInCadastro}
        onPress={() => navigation.navigate("TransicaoPagina")}
      >
        <Text style={[styles.logIn, styles.logFlexBox]}>Log In</Text>
        <Image
          style={styles.logInCadastroChild}
          contentFit="cover"
          source={require("../assets/seta.png")}
        />
      </Pressable>
      <View style={styles.logInComGoogleOuApple}>
        <Text style={[styles.continueWithApple, styles.continueTypo]}>
          Continue with Apple
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.continueWithGoogle, styles.continueTypo]}>
          Continue with Google
        </Text>
        <Image
          style={[styles.logoGoogleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/logo-google1.png")}
        />
      </View>
      <View style={[styles.coloqueASenha, styles.coloqueLayout]}>
        <Text style={[styles.forgotYourPassword, styles.logFlexBox]}>
          forgot your password?
        </Text>
        <View style={[styles.retanguloPassword, styles.coloqueLayout]} />
        <Pressable
          style={styles.olhoFechado}
          onPress={() => navigation.navigate("LogIn2Pagina")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/olho-fechado1.png")}
          />
        </Pressable>
        <Text style={styles.password}>Password</Text>
        <Text style={[styles.password1, styles.logFlexBox]}>Password</Text>
      </View>
      <View style={[styles.coloqueSeuEmail, styles.coloqueLayout]}>
        <View style={[styles.retanguloPassword, styles.coloqueLayout]} />
        <Text style={[styles.password1, styles.logFlexBox]}>Email</Text>
        <Text style={styles.password}>Put your email here</Text>
      </View>
      <View style={[styles.logInTitulo, styles.helloLayout]}>
        <Text style={[styles.logIn1, styles.logFlexBox]}>Log In</Text>
        <Text style={[styles.hello, styles.helloLayout]}>Hello,</Text>
      </View>
      <Text style={styles.logIn2}>LOG IN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detalheLayout: {
    width: 390,
    left: 0,
  },
  detalhePosition: {
    backgroundColor: Color.colorIndianred_100,
    borderTopLeftRadius: Border.br_31xl,
    position: "absolute",
  },
  logFlexBox: {
    textAlign: "left",
    color: Color.colorGray_200,
  },
  continueTypo: {
    height: 16,
    width: 169,
    fontFamily: FontFamily.montserratBold,
    letterSpacing: 1.3,
    left: 42,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "88.15%",
    width: "11.85%",
    position: "absolute",
    overflow: "hidden",
  },
  coloqueLayout: {
    width: 311,
    position: "absolute",
  },
  helloLayout: {
    width: 295,
    position: "absolute",
  },
  detalheChild: {
    top: 745,
    height: 100,
    width: 390,
    left: 0,
  },
  detalheItem: {
    top: 655,
    left: 302,
    width: 88,
    height: 90,
  },
  detalheInner: {
    borderBottomRightRadius: Border.br_31xl,
    height: 745,
    top: 0,
    width: 390,
    position: "absolute",
    backgroundColor: Color.colorLinen_100,
  },
  detalhe: {
    height: 845,
    top: 0,
    width: 390,
    position: "absolute",
  },
  logIn: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorGray_200,
    left: 0,
    top: 0,
    position: "absolute",
  },
  logInCadastroChild: {
    top: 1,
    left: 70,
    width: 29,
    height: 19,
    position: "absolute",
  },
  logInCadastro: {
    top: 789,
    left: 247,
    width: 99,
    height: 20,
    position: "absolute",
  },
  continueWithApple: {
    top: 51,
  },
  vectorIcon: {
    height: "42.31%",
    top: "57.69%",
    bottom: "0%",
  },
  continueWithGoogle: {
    top: 5,
  },
  logoGoogleIcon: {
    height: "35.03%",
    top: "0%",
    bottom: "64.97%",
  },
  logInComGoogleOuApple: {
    top: 522,
    width: 211,
    height: 73,
    left: 35,
    position: "absolute",
  },
  forgotYourPassword: {
    top: 67,
    left: 1,
    fontSize: FontSize.size_2xs,
    fontWeight: "300",
    fontFamily: FontFamily.josefinSansLight,
    position: "absolute",
  },
  retanguloPassword: {
    top: 16,
    borderStyle: "solid",
    borderColor: Color.colorIndianred_100,
    borderWidth: 2,
    height: 46,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  olhoFechado: {
    left: 271,
    top: 34,
    width: 21,
    height: 9,
    position: "absolute",
  },
  password: {
    top: 32,
    left: 8,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  password1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorGray_200,
    left: 0,
    top: 0,
    position: "absolute",
  },
  coloqueASenha: {
    top: 412,
    height: 78,
    left: 35,
  },
  coloqueSeuEmail: {
    top: 334,
    height: 62,
    left: 35,
  },
  logIn1: {
    top: 37,
    fontSize: FontSize.size_31xl,
    fontWeight: "600",
    fontFamily: FontFamily.josefinSansSemiBold,
    width: 194,
    height: 53,
    left: 0,
    position: "absolute",
  },
  hello: {
    fontSize: FontSize.size_16xl,
    height: 31,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    left: 0,
    top: 0,
  },
  logInTitulo: {
    top: 116,
    left: 48,
    height: 90,
  },
  logIn2: {
    top: 28,
    left: 19,
    fontSize: FontSize.size_101xl,
    lineHeight: 114,
    fontFamily: FontFamily.kodchasanBold,
    color: Color.colorIndianred_200,
    opacity: 0.09,
    fontWeight: "700",
    textAlign: "left",
    width: 390,
    position: "absolute",
  },
  logIn1Pagina: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorLinen_100,
  },
});

export default LogIn1Pagina;

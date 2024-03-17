import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignUpPagina3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUpPagina4}>
      <View style={[styles.detalhe, styles.detalheLayout]}>
        <View style={[styles.detalheChild, styles.detalhePosition]} />
        <View style={[styles.detalheItem, styles.detalhePosition]} />
        <View style={[styles.detalheInner, styles.detalheLayout]} />
      </View>
      <Pressable
        style={styles.signUpCadastro}
        onPress={() => navigation.navigate("TransicaoPagina")}
      >
        <Text style={[styles.signUp, styles.signFlexBox]}>Sign Up</Text>
        <Image
          style={styles.signUpCadastroChild}
          contentFit="cover"
          source={require("../assets/seta.png")}
        />
      </Pressable>
      <View
        style={[
          styles.infoPessoalParaCadastro,
          styles.infoPessoalParaCadastroLayout,
        ]}
      >
        <View style={styles.signUpComGoogleOuApple}>
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
            source={require("../assets/logo-google.png")}
          />
        </View>
        <View style={[styles.confirmeASenha, styles.senhaLayout]}>
          <View
            style={[
              styles.retanguloConfirmePassword,
              styles.infoPessoalParaCadastroLayout,
            ]}
          />
          <Pressable
            style={styles.olhoFechado}
            onPress={() => navigation.navigate("SignUpPagina4")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/olho-fechado1.png")}
            />
          </Pressable>
          <Text style={styles.password}>Password</Text>
          <Text style={[styles.confirmYourPassword, styles.signFlexBox]}>
            Confirm your password
          </Text>
        </View>
        <View style={[styles.crieUmaSenha, styles.senhaLayout]}>
          <View
            style={[
              styles.retanguloConfirmePassword,
              styles.infoPessoalParaCadastroLayout,
            ]}
          />
          <Pressable
            style={styles.olhoFechado}
            onPress={() => navigation.navigate("SignUpPagina4")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/olho-fechado1.png")}
            />
          </Pressable>
          <Text style={styles.password}>Password</Text>
          <Text style={[styles.confirmYourPassword, styles.signFlexBox]}>
            Password
          </Text>
        </View>
        <View style={[styles.coloqueOEmail, styles.senhaLayout]}>
          <View
            style={[
              styles.retanguloConfirmePassword,
              styles.infoPessoalParaCadastroLayout,
            ]}
          />
          <Text style={styles.password}>Put your email here</Text>
          <Text style={[styles.confirmYourPassword, styles.signFlexBox]}>
            Email
          </Text>
        </View>
        <View style={[styles.coloqueONome, styles.senhaLayout]}>
          <View
            style={[
              styles.retanguloConfirmePassword,
              styles.infoPessoalParaCadastroLayout,
            ]}
          />
          <Text style={styles.password}>Put your name here</Text>
          <Text style={[styles.confirmYourPassword, styles.signFlexBox]}>
            Your name
          </Text>
        </View>
      </View>
      <View style={[styles.signUpTitulo, styles.helloLayout]}>
        <Text style={[styles.hello, styles.helloLayout]}>Hello,</Text>
        <Text style={[styles.signUp1, styles.signFlexBox]}>Sign Up</Text>
      </View>
      <Text style={styles.signUp2}>SIGN UP</Text>
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
  signFlexBox: {
    textAlign: "left",
    color: Color.colorGray_200,
    left: 0,
  },
  infoPessoalParaCadastroLayout: {
    width: 311,
    position: "absolute",
  },
  continueTypo: {
    height: 16,
    width: 169,
    fontFamily: FontFamily.josefinSansBold,
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
  senhaLayout: {
    height: 62,
    width: 311,
    left: 0,
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
    position: "absolute",
    backgroundColor: Color.colorLinen_100,
    width: 390,
  },
  detalhe: {
    height: 845,
    top: 0,
    position: "absolute",
  },
  signUp: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorGray_200,
    top: 0,
    position: "absolute",
  },
  signUpCadastroChild: {
    left: 79,
    width: 29,
    height: 19,
    top: 0,
    position: "absolute",
  },
  signUpCadastro: {
    top: 790,
    left: 238,
    width: 108,
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
  signUpComGoogleOuApple: {
    top: 328,
    width: 211,
    height: 73,
    left: 0,
    position: "absolute",
  },
  retanguloConfirmePassword: {
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
  confirmYourPassword: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorGray_200,
    top: 0,
    position: "absolute",
  },
  confirmeASenha: {
    top: 234,
  },
  crieUmaSenha: {
    top: 156,
  },
  coloqueOEmail: {
    top: 78,
  },
  coloqueONome: {
    top: 0,
  },
  infoPessoalParaCadastro: {
    top: 293,
    left: 40,
    height: 401,
  },
  hello: {
    fontSize: FontSize.size_16xl,
    height: 31,
    textAlign: "left",
    color: Color.colorGray_200,
    left: 0,
    fontFamily: FontFamily.josefinSansRegular,
    top: 0,
  },
  signUp1: {
    top: 37,
    fontSize: FontSize.size_31xl,
    fontWeight: "600",
    fontFamily: FontFamily.josefinSansSemiBold,
    width: 194,
    height: 53,
    position: "absolute",
  },
  signUpTitulo: {
    top: 116,
    left: 48,
    height: 90,
  },
  signUp2: {
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
  signUpPagina4: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorLinen_100,
  },
});

export default SignUpPagina3;

import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignUpPagina4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUpPagina5}>
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
          style={[styles.signUpCadastroChild, styles.detalhePosition1]}
          contentFit="cover"
          source={require("../assets/seta.png")}
        />
      </Pressable>
      <View style={[styles.crieUmaSenha, styles.senhaLayout]}>
        <View style={styles.retangulo} />
        <Text style={[styles.text, styles.textTypo]}>**********</Text>
        <Pressable
          style={styles.olhoFechado}
          onPress={() => navigation.navigate("SignUpPagina3")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/olho-fechado1.png")}
          />
        </Pressable>
        <Text style={[styles.password, styles.signFlexBox]}>Password</Text>
      </View>
      <View style={[styles.coloqueOEmail, styles.senhaLayout]}>
        <View style={styles.retangulo} />
        <Text style={[styles.josefinasansgmailcom, styles.textTypo]}>
          josefina.sans@gmail.com
        </Text>
        <Text style={[styles.password, styles.signFlexBox]}>Email</Text>
      </View>
      <View style={[styles.confirmeASenha, styles.senhaLayout]}>
        <View style={styles.retangulo} />
        <Pressable
          style={styles.olhoFechado}
          onPress={() => navigation.navigate("SignUpPagina3")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/olho-fechado1.png")}
          />
        </Pressable>
        <Text style={[styles.text, styles.textTypo]}>**********</Text>
        <Text style={[styles.password, styles.signFlexBox]}>
          Confirm your password
        </Text>
      </View>
      <View style={[styles.coloqueSeuNome, styles.senhaLayout]}>
        <View style={styles.retangulo} />
        <Text style={[styles.josefinasansgmailcom, styles.textTypo]}>
          Josefina Sans
        </Text>
        <Text style={[styles.password, styles.signFlexBox]}>Your name</Text>
      </View>
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
      <View style={[styles.signUpTitulo, styles.helloLayout]}>
        <Text style={[styles.signUp1, styles.signFlexBox]}>Sign Up</Text>
        <Text style={[styles.hello, styles.helloLayout]}>Hello,</Text>
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
  detalhePosition1: {
    top: 0,
    position: "absolute",
  },
  senhaLayout: {
    height: 62,
    width: 311,
    left: 40,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    left: 8,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
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
    left: 0,
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
  },
  signUpCadastro: {
    top: 790,
    left: 238,
    width: 108,
    height: 20,
    position: "absolute",
  },
  retangulo: {
    top: 16,
    borderStyle: "solid",
    borderColor: Color.colorIndianred_100,
    borderWidth: 2,
    height: 46,
    width: 311,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 36,
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
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorGray_200,
    top: 0,
    position: "absolute",
  },
  crieUmaSenha: {
    top: 449,
  },
  josefinasansgmailcom: {
    top: 32,
  },
  coloqueOEmail: {
    top: 371,
  },
  confirmeASenha: {
    top: 527,
  },
  coloqueSeuNome: {
    top: 293,
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
    top: 621,
    width: 211,
    height: 73,
    left: 40,
    position: "absolute",
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
  hello: {
    fontSize: FontSize.size_16xl,
    height: 31,
    textAlign: "left",
    color: Color.colorGray_200,
    left: 0,
    fontFamily: FontFamily.josefinSansRegular,
    top: 0,
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
  signUpPagina5: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorLinen_100,
  },
});

export default SignUpPagina4;

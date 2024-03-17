import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TelaLognInESignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.telaLognInESignUp}>
      <Text style={styles.firstSteps}>First Steps</Text>
      <View style={[styles.logIn, styles.logInLayout]}>
        <Text style={[styles.textoLogIn, styles.logTypo]}>
          Already have an account?
        </Text>
        <Pressable
          style={[styles.logInContainer, styles.logContainerPosition]}
          onPress={() => navigation.navigate("LogIn1Pagina")}
        >
          <Text style={[styles.logIn1, styles.logTypo]}>Log In</Text>
        </Pressable>
      </View>
      <View style={[styles.signUp, styles.logInLayout]}>
        <Text style={[styles.textoLogIn, styles.logTypo]}>
          Don’t have an account?
        </Text>
        <Pressable
          style={[styles.signUpContainer, styles.logContainerPosition]}
          onPress={() => navigation.navigate("SignUpPagina")}
        >
          <Text style={[styles.logIn1, styles.logTypo]}>Sign Up</Text>
        </Pressable>
      </View>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logInLayout: {
    height: 20,
    position: "absolute",
  },
  logTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.josefinSansRegular,
  },
  logContainerPosition: {
    top: 0,
    position: "absolute",
  },
  firstSteps: {
    top: 451,
    left: 112,
    fontSize: FontSize.size_16xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  textoLogIn: {
    left: 0,
    color: Color.colorLightpink_100,
    top: 0,
    position: "absolute",
  },
  logIn1: {
    textDecoration: "underline",
    color: Color.colorWhite,
  },
  logInContainer: {
    left: 244,
  },
  logIn: {
    top: 697,
    left: 30,
    width: 303,
  },
  signUpContainer: {
    left: 223,
  },
  signUp: {
    top: 657,
    left: 33,
    width: 296,
  },
  logoIcon: {
    top: 201,
    left: 104,
    width: 199,
    height: 238,
    position: "absolute",
  },
  telaLognInESignUp: {
    backgroundColor: Color.colorIndianred_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TelaLognInESignUp;

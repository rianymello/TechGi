import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignUpPagina = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUpPagina1}>
      <View style={[styles.detalhe, styles.detalheLayout]}>
        <View style={[styles.detalheChild, styles.detalheBg]} />
        <View style={[styles.detalheItem, styles.nextLayout]} />
        <View style={[styles.detalheInner, styles.detalheLayout]} />
      </View>
      <Pressable
        style={[styles.next, styles.nextLayout]}
        onPress={() => navigation.navigate("SignUpPagina1")}
      >
        <Text style={[styles.textoNext, styles.textoTypo]}>Next</Text>
        <Image
          style={styles.setaIcon}
          contentFit="cover"
          source={require("../assets/seta.png")}
        />
      </Pressable>
      <View style={styles.questionrioPgina1}>
        <View style={styles.horasSonoGrupo}>
          <View style={[styles.retanguloHorasSono, styles.retanguloLayout]} />
          <Text style={[styles.exemploHoras, styles.horasTypo]}>
            Ex: 10 Hours
          </Text>
          <Text style={[styles.textoHoras, styles.horasTypo]}>
            How many hours does the baby sleep? (Optional)
          </Text>
        </View>
        <View style={styles.sonoVezesGrupo}>
          <View style={[styles.retanguloSonoVezes, styles.retanguloLayout]} />
          <Text style={[styles.exemploSono, styles.horasTypo]}>
            Ex: 3 times
          </Text>
          <Text style={[styles.questaoSonoVezes, styles.horasTypo]}>
            How many times a day does the baby sleep? (Optional)
          </Text>
        </View>
        <View style={[styles.pesoGrupo, styles.grupoLayout]}>
          <View style={[styles.retanguloHorasSono, styles.retanguloLayout]} />
          <Text style={[styles.exemploPeso, styles.horasTypo]}>Ex: 3 kg</Text>
          <Text style={[styles.textoHoras, styles.horasTypo]}>
            How many kilos does the baby weigh? (0ptional)
          </Text>
        </View>
        <View style={[styles.idadeGrupo, styles.grupoLayout]}>
          <Text style={[styles.textoHoras, styles.horasTypo]}>
            How old is the baby? (0ptional)
          </Text>
          <View style={[styles.retanguloHorasSono, styles.retanguloLayout]} />
          <Text style={[styles.exemploHoras, styles.horasTypo]}>
            Ex: 2 months
          </Text>
        </View>
        <Text style={[styles.textoInicialQuestionario, styles.textoTypo]}>
          A few questions to suggest content based on your profile
        </Text>
      </View>
      <View style={[styles.signUpTtulo, styles.helloLayout]}>
        <Text style={[styles.hello, styles.helloLayout]}>Hello,</Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>
      <Text style={[styles.signUp1, styles.detalheLayout]}>SIGN UP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detalheLayout: {
    width: 390,
    position: "absolute",
  },
  detalheBg: {
    backgroundColor: Color.colorLightpink_300,
    borderTopLeftRadius: Border.br_31xl,
  },
  nextLayout: {
    width: 88,
    position: "absolute",
  },
  textoTypo: {
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorGray_200,
    top: 0,
  },
  retanguloLayout: {
    height: 46,
    borderWidth: 2,
    borderColor: Color.colorLightpink_300,
    borderStyle: "solid",
    width: 311,
    left: 0,
    position: "absolute",
  },
  horasTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  grupoLayout: {
    width: 311,
    height: 67,
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
    position: "absolute",
    left: 0,
  },
  detalheItem: {
    top: 655,
    left: 302,
    height: 90,
    backgroundColor: Color.colorLightpink_300,
    borderTopLeftRadius: Border.br_31xl,
  },
  detalheInner: {
    borderBottomRightRadius: Border.br_31xl,
    height: 745,
    left: 0,
    top: 0,
    backgroundColor: Color.colorLinen_100,
  },
  detalhe: {
    height: 845,
    left: 0,
    top: 0,
  },
  textoNext: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray_200,
    left: 0,
    position: "absolute",
  },
  setaIcon: {
    left: 59,
    width: 29,
    height: 19,
    top: 0,
    position: "absolute",
  },
  next: {
    top: 790,
    left: 258,
    height: 20,
  },
  retanguloHorasSono: {
    top: 21,
  },
  exemploHoras: {
    width: 80,
    left: 23,
    top: 37,
  },
  textoHoras: {
    left: 0,
    top: 0,
  },
  horasSonoGrupo: {
    top: 340,
    width: 314,
    height: 67,
    left: 0,
    position: "absolute",
  },
  retanguloSonoVezes: {
    top: 35,
  },
  exemploSono: {
    top: 51,
    width: 70,
    left: 23,
  },
  questaoSonoVezes: {
    width: 320,
    left: 0,
    top: 0,
  },
  sonoVezesGrupo: {
    top: 243,
    height: 81,
    width: 320,
    left: 0,
    position: "absolute",
  },
  exemploPeso: {
    width: 56,
    left: 23,
    top: 37,
  },
  pesoGrupo: {
    top: 160,
  },
  idadeGrupo: {
    top: 77,
  },
  textoInicialQuestionario: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    width: 264,
    left: 23,
    color: Color.colorGray_200,
    position: "absolute",
  },
  questionrioPgina1: {
    top: 307,
    left: 40,
    height: 407,
    width: 320,
    position: "absolute",
  },
  hello: {
    fontSize: FontSize.size_16xl,
    height: 31,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    top: 0,
    left: 0,
  },
  signUp: {
    fontSize: FontSize.size_31xl,
    fontWeight: "600",
    fontFamily: FontFamily.josefinSansSemiBold,
    width: 194,
    height: 53,
    top: 37,
    textAlign: "left",
    color: Color.colorGray_200,
    left: 0,
    position: "absolute",
  },
  signUpTtulo: {
    top: 116,
    left: 48,
    height: 90,
  },
  signUp1: {
    top: 28,
    left: 19,
    fontSize: FontSize.size_101xl,
    lineHeight: 114,
    fontWeight: "700",
    fontFamily: FontFamily.kodchasanBold,
    color: Color.colorIndianred_200,
    opacity: 0.09,
    textAlign: "left",
  },
  signUpPagina1: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorLinen_100,
  },
});

export default SignUpPagina;

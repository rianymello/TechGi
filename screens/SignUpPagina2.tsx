import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignUpPagina2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUpPagina3}>
      <View style={[styles.detalhe, styles.detalheLayout]}>
        <View style={[styles.detalheChild, styles.detalheBg]} />
        <View style={[styles.detalheItem, styles.nextLayout]} />
        <View style={[styles.detalheInner, styles.detalheLayout]} />
      </View>
      <Pressable
        style={[styles.next, styles.nextLayout]}
        onPress={() => navigation.navigate("SignUpPagina3")}
      >
        <Text style={[styles.textoNext, styles.helloClr]}>Next</Text>
        <Image
          style={styles.setaIcon}
          contentFit="cover"
          source={require("../assets/seta.png")}
        />
      </Pressable>
      <View style={styles.questionarioPagina3}>
        <View style={styles.questaoDosesVacina}>
          <View
            style={[styles.retanguloExemploDoseVacin, styles.helloLayout]}
          />
          <Text style={[styles.textoExemplo, styles.questaoTypo]}>
            Ex: HepB, DTap - 1 dose
          </Text>
          <Text style={[styles.questaoQuantas, styles.questaoTypo]}>
            How many doses of these vaccines has your baby had?
          </Text>
        </View>
        <View style={[styles.questaoQuantasVacinasBebe, styles.helloLayout]}>
          <View style={styles.retanguloVaricella} />
          <Text style={[styles.varicella, styles.pcvTypo]}>Varicella</Text>
          <View style={styles.retanguloPcv} />
          <Text style={[styles.pcv, styles.pcvTypo]}>PCV</Text>
          <View
            style={[styles.retanguloRotavirus, styles.retanguloPosition4]}
          />
          <Text style={[styles.rotavirus, styles.mmrTypo]}>Rotavirus</Text>
          <View style={[styles.retanguloHepb, styles.retanguloPosition3]} />
          <Text style={[styles.hepb, styles.mmrTypo]}>{`HepB `}</Text>
          <View style={[styles.retanguloHepa, styles.retanguloPosition2]} />
          <Text style={[styles.hepa, styles.mmrTypo]}>{`HepA `}</Text>
          <View style={[styles.retanguloMmr, styles.retanguloPosition1]} />
          <Text style={[styles.mmr, styles.mmrTypo]}>MMR</Text>
          <View style={[styles.retanguloInfluenza, styles.retanguloPosition]} />
          <Text style={[styles.influenza, styles.ipvTypo]}>Influenza</Text>
          <View style={[styles.retanguloIpv, styles.retanguloPosition]} />
          <Text style={[styles.ipv, styles.ipvTypo]}>{`IPV `}</Text>
          <View style={[styles.retanguloHib, styles.retanguloPosition]} />
          <Text style={[styles.hib, styles.ipvTypo]}>Hib</Text>
          <View style={[styles.retanguloDtap, styles.retanguloPosition]} />
          <Text style={[styles.dtap, styles.ipvTypo]}>DTaP</Text>
          <Text style={[styles.questaoQual, styles.questaoTypo]}>
            Which vaccinations has your baby had?
          </Text>
        </View>
        <View style={styles.questaoRelacionamentoBebe}>
          <View style={[styles.retanguloDifficult, styles.retanguloLayout2]} />
          <Text style={[styles.difficult, styles.funTypo]}>Difficult</Text>
          <View style={[styles.retanguloCareful, styles.retanguloLayout2]} />
          <Text style={[styles.careful, styles.funTypo]}>Careful</Text>
          <View style={[styles.retanguloFun, styles.retanguloLayout2]} />
          <Text style={[styles.fun, styles.funTypo]}>Fun</Text>
          <View style={[styles.retanguloAttentive, styles.retanguloLayout1]} />
          <Text style={[styles.attentive, styles.lovingTypo]}>Attentive</Text>
          <View style={[styles.retanguloLoving, styles.retanguloLayout1]} />
          <Text style={[styles.loving, styles.lovingTypo]}>Loving</Text>
          <View style={[styles.retanguloDifferent, styles.retanguloLayout1]} />
          <Text style={[styles.different, styles.lovingTypo]}>Different</Text>
          <View style={[styles.retanguloStrange, styles.retanguloLayout]} />
          <Text style={[styles.strange, styles.goodTypo]}>Strange</Text>
          <View style={[styles.retanguloPleasant, styles.retanguloLayout]} />
          <Text style={[styles.pleasant, styles.goodTypo]}>Pleasant</Text>
          <View style={[styles.retanguloGood, styles.retanguloLayout]} />
          <Text style={[styles.good, styles.goodTypo]}>Good</Text>
          <Text style={[styles.questaoQuantas, styles.questaoTypo]}>
            How is the baby's social and emotional interaction with the family?
          </Text>
        </View>
      </View>
      <View style={[styles.signUpTitulo, styles.helloLayout]}>
        <Text style={[styles.signUp, styles.helloClr]}>Sign Up</Text>
        <Text style={[styles.hello, styles.helloLayout]}>Hello,</Text>
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
    backgroundColor: Color.colorLightcoral_200,
    borderTopLeftRadius: Border.br_31xl,
  },
  nextLayout: {
    width: 88,
    position: "absolute",
  },
  helloClr: {
    color: Color.colorGray_200,
    textAlign: "left",
    left: 0,
  },
  helloLayout: {
    width: 295,
    position: "absolute",
  },
  questaoTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  pcvTypo: {
    top: 113,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  retanguloPosition4: {
    left: 215,
    width: 80,
  },
  mmrTypo: {
    top: 73,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  retanguloPosition3: {
    left: 147,
    width: 59,
  },
  retanguloPosition2: {
    left: 78,
    width: 59,
  },
  retanguloPosition1: {
    left: 10,
    width: 59,
  },
  retanguloPosition: {
    top: 26,
    height: 28,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral_200,
    position: "absolute",
  },
  ipvTypo: {
    top: 33,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  retanguloLayout2: {
    width: 89,
    top: 132,
    height: 28,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral_200,
    position: "absolute",
  },
  funTypo: {
    top: 139,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  retanguloLayout1: {
    top: 88,
    width: 89,
    height: 28,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral_200,
    position: "absolute",
  },
  lovingTypo: {
    top: 95,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  retanguloLayout: {
    top: 44,
    width: 89,
    height: 28,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral_200,
    position: "absolute",
  },
  goodTypo: {
    top: 51,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
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
    backgroundColor: Color.colorLightcoral_200,
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
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorGray_200,
    top: 0,
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
  retanguloExemploDoseVacin: {
    top: 40,
    borderStyle: "solid",
    borderColor: Color.colorLightcoral_200,
    borderWidth: 2,
    height: 46,
    left: 0,
  },
  textoExemplo: {
    top: 56,
    left: 7,
  },
  questaoQuantas: {
    width: 305,
    left: 0,
    top: 0,
  },
  questaoDosesVacina: {
    top: 344,
    height: 86,
    width: 305,
    left: 0,
    position: "absolute",
  },
  retanguloVaricella: {
    left: 149,
    height: 28,
    width: 80,
    borderRadius: Border.br_mini,
    top: 106,
    backgroundColor: Color.colorLightcoral_200,
    position: "absolute",
  },
  varicella: {
    left: 162,
  },
  retanguloPcv: {
    left: 80,
    width: 59,
    height: 28,
    borderRadius: Border.br_mini,
    top: 106,
    backgroundColor: Color.colorLightcoral_200,
    position: "absolute",
  },
  pcv: {
    left: 95,
  },
  retanguloRotavirus: {
    top: 66,
    height: 28,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral_200,
    position: "absolute",
  },
  rotavirus: {
    left: 226,
  },
  retanguloHepb: {
    top: 66,
    height: 28,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral_200,
    position: "absolute",
  },
  hepb: {
    left: 158,
  },
  retanguloHepa: {
    top: 66,
    height: 28,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral_200,
    position: "absolute",
  },
  hepa: {
    left: 89,
  },
  retanguloMmr: {
    top: 66,
    height: 28,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral_200,
    position: "absolute",
  },
  mmr: {
    left: 21,
  },
  retanguloInfluenza: {
    left: 215,
    width: 80,
  },
  influenza: {
    left: 226,
  },
  retanguloIpv: {
    left: 147,
    width: 59,
  },
  ipv: {
    left: 165,
  },
  retanguloHib: {
    left: 78,
    width: 59,
  },
  hib: {
    left: 96,
  },
  retanguloDtap: {
    left: 10,
    width: 59,
  },
  dtap: {
    left: 22,
  },
  questaoQual: {
    left: 0,
    top: 0,
  },
  questaoQuantasVacinasBebe: {
    top: 184,
    height: 134,
    left: 0,
  },
  retanguloDifficult: {
    left: 206,
  },
  difficult: {
    left: 227,
  },
  retanguloCareful: {
    left: 107,
  },
  careful: {
    left: 128,
  },
  retanguloFun: {
    left: 8,
  },
  fun: {
    left: 40,
  },
  retanguloAttentive: {
    left: 206,
  },
  attentive: {
    left: 221,
  },
  retanguloLoving: {
    left: 107,
  },
  loving: {
    left: 131,
  },
  retanguloDifferent: {
    left: 8,
  },
  different: {
    left: 26,
  },
  retanguloStrange: {
    left: 206,
  },
  strange: {
    left: 225,
  },
  retanguloPleasant: {
    left: 107,
  },
  pleasant: {
    left: 123,
  },
  retanguloGood: {
    left: 8,
  },
  good: {
    left: 34,
  },
  questaoRelacionamentoBebe: {
    height: 160,
    width: 305,
    left: 0,
    top: 0,
    position: "absolute",
  },
  questionarioPagina3: {
    top: 278,
    left: 41,
    height: 430,
    width: 305,
    position: "absolute",
  },
  signUp: {
    top: 37,
    fontSize: FontSize.size_31xl,
    fontWeight: "600",
    fontFamily: FontFamily.josefinSansSemiBold,
    width: 194,
    height: 53,
    textAlign: "left",
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
  signUpPagina3: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorLinen_100,
  },
});

export default SignUpPagina2;

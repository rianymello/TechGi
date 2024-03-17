import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignUpPagina1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUpPagina2}>
      <View style={[styles.detalhe, styles.detalheLayout]}>
        <View style={[styles.detalheChild, styles.detalheBg]} />
        <View style={[styles.detalheItem, styles.nextLayout]} />
        <View style={[styles.detalheInner, styles.detalheLayout]} />
      </View>
      <Pressable
        style={[styles.next, styles.nextLayout]}
        onPress={() => navigation.navigate("SignUpPagina2")}
      >
        <Text style={[styles.textoNext, styles.helloClr]}>Next</Text>
        <Image
          style={styles.setaIcon}
          contentFit="cover"
          source={require("../assets/seta.png")}
        />
      </Pressable>
      <View style={styles.questionarioPagina2}>
        <View style={[styles.questaoSentimentoMae, styles.questaoLayout]}>
          <View style={[styles.retanguloScared, styles.retanguloLayout]} />
          <Text style={[styles.scared, styles.walkTypo]}>Scared</Text>
          <View style={[styles.retanguloAnxious, styles.retanguloLayout]} />
          <Text style={[styles.anxious, styles.walkTypo]}>Anxious</Text>
          <View style={[styles.retanguloConfused, styles.retanguloPosition2]} />
          <Text style={[styles.confused, styles.walkTypo]}>Confused</Text>
          <View style={[styles.retanguloSurprise, styles.retanguloPosition1]} />
          <Text style={[styles.surprise, styles.walkTypo]}>Surprise</Text>
          <View style={[styles.retanguloGrateful, styles.retanguloLayout]} />
          <Text style={[styles.grateful, styles.calmTypo]}>Grateful</Text>
          <View style={[styles.retanguloExcited, styles.retanguloLayout]} />
          <Text style={[styles.excited, styles.calmTypo]}>Excited</Text>
          <View style={[styles.retanguloCalm, styles.littleJumpsPosition]} />
          <Text style={[styles.calm, styles.calmTypo]}>Calm</Text>
          <View
            style={[styles.retanguloEnchanted, styles.retanguloPosition1]}
          />
          <Text style={[styles.enchanted, styles.calmTypo]}>Enchanted</Text>
          <View style={[styles.retanguloWorried, styles.retanguloLayout]} />
          <Text style={[styles.worried, styles.sitTypo]}>Worried</Text>
          <View style={[styles.retanguloCheerful, styles.retanguloPosition]} />
          <Text style={[styles.cheerful, styles.sitTypo]}>Cheerful</Text>
          <View style={[styles.retanguloInsecure, styles.retanguloLayout]} />
          <Text style={[styles.insecure, styles.sitTypo]}> Insecure</Text>
          <View style={[styles.retanguloHappy, styles.retanguloPosition1]} />
          <Text style={[styles.happy, styles.sitTypo]}>Happy</Text>
          <Text style={[styles.textoFeeling, styles.walkTypo]}>
            How are you feeling as a mother?
          </Text>
        </View>
        <View style={[styles.questaoOQueOBebeFaz, styles.questaoLayout]}>
          <View style={[styles.retanguloWalk, styles.retanguloLayout]} />
          <Text style={[styles.walk, styles.walkTypo]}>Walk</Text>
          <View
            style={[styles.retanguloLittleJumps, styles.retanguloPosition2]}
          />
          <Text style={[styles.littleJumps, styles.littleJumpsPosition]}>
            Little jumps
          </Text>
          <View
            style={[styles.retanguloPickUpObjects, styles.retanguloLayout]}
          />
          <Text style={[styles.pickUpObjects, styles.calmTypo]}>
            Pick up objects
          </Text>
          <View style={[styles.retanguloRoll, styles.retanguloPosition]} />
          <Text style={[styles.roll, styles.calmTypo]}>Roll</Text>
          <View
            style={[styles.retanguloSupportingTheHea, styles.retanguloLayout]}
          />
          <Text style={[styles.supportingTheHead, styles.calmTypo]}>
            Supporting the head
          </Text>
          <View style={[styles.retanguloCrawl, styles.retanguloLayout]} />
          <Text style={[styles.crawl, styles.sitTypo]}>Crawl</Text>
          <View style={[styles.retanguloSit, styles.retanguloLayout]} />
          <Text style={[styles.sit, styles.sitTypo]}>Sit</Text>
          <View style={[styles.retanguloPutHisHands, styles.retanguloLayout]} />
          <Text style={[styles.putHisHands, styles.sitTypo]}>
            Put his hands to his mouth
          </Text>
          <Text style={[styles.questaoO, styles.walkTypo]}>
            Which developmental milestones has the baby reached?
          </Text>
        </View>
      </View>
      <View style={[styles.signUpTitulo, styles.helloLayout]}>
        <Text style={[styles.hello, styles.helloLayout]}>Hello,</Text>
        <Text style={[styles.signUp, styles.helloClr]}>Sign Up</Text>
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
    backgroundColor: Color.colorLightcoral_100,
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
  questaoLayout: {
    height: 140,
    position: "absolute",
  },
  retanguloLayout: {
    height: 28,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral_100,
  },
  walkTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
  },
  retanguloPosition2: {
    left: 100,
    height: 28,
    borderRadius: Border.br_mini,
    top: 112,
    backgroundColor: Color.colorLightcoral_100,
    position: "absolute",
  },
  retanguloPosition1: {
    left: 9,
    height: 28,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral_100,
    position: "absolute",
  },
  calmTypo: {
    top: 77,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  littleJumpsPosition: {
    left: 107,
    position: "absolute",
  },
  sitTypo: {
    top: 35,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  retanguloPosition: {
    left: 161,
    height: 28,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral_100,
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
    backgroundColor: Color.colorLightcoral_100,
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
  retanguloScared: {
    left: 273,
    width: 62,
    top: 112,
    position: "absolute",
  },
  scared: {
    left: 282,
    top: 119,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  retanguloAnxious: {
    left: 188,
    width: 77,
    top: 112,
    position: "absolute",
  },
  anxious: {
    left: 202,
    top: 119,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  retanguloConfused: {
    width: 80,
  },
  confused: {
    left: 110,
    top: 119,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  retanguloSurprise: {
    width: 83,
    top: 112,
  },
  surprise: {
    left: 24,
    top: 119,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  retanguloGrateful: {
    left: 269,
    width: 66,
    top: 70,
    position: "absolute",
  },
  grateful: {
    left: 275,
  },
  retanguloExcited: {
    left: 178,
    width: 87,
    top: 70,
    position: "absolute",
  },
  excited: {
    left: 198,
  },
  retanguloCalm: {
    width: 67,
    top: 70,
    height: 28,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral_100,
  },
  calm: {
    left: 123,
  },
  retanguloEnchanted: {
    width: 94,
    top: 70,
  },
  enchanted: {
    left: 22,
  },
  retanguloWorried: {
    left: 235,
    width: 100,
    top: 28,
    position: "absolute",
  },
  worried: {
    left: 260,
  },
  retanguloCheerful: {
    top: 28,
    width: 67,
  },
  cheerful: {
    left: 167,
  },
  retanguloInsecure: {
    left: 73,
    width: 81,
    top: 28,
    position: "absolute",
  },
  insecure: {
    left: 85,
  },
  retanguloHappy: {
    width: 57,
    top: 28,
  },
  happy: {
    left: 16,
  },
  textoFeeling: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  questaoSentimentoMae: {
    top: 175,
    width: 335,
    left: 3,
  },
  retanguloWalk: {
    left: 193,
    width: 79,
    top: 112,
    position: "absolute",
  },
  walk: {
    left: 216,
    top: 119,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  retanguloLittleJumps: {
    width: 89,
  },
  littleJumps: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    top: 119,
  },
  retanguloPickUpObjects: {
    left: 238,
    width: 113,
    top: 70,
    position: "absolute",
  },
  pickUpObjects: {
    left: 252,
  },
  retanguloRoll: {
    width: 73,
    top: 70,
  },
  roll: {
    left: 185,
  },
  retanguloSupportingTheHea: {
    width: 157,
    top: 70,
    left: 0,
    position: "absolute",
  },
  supportingTheHead: {
    left: 13,
  },
  retanguloCrawl: {
    left: 247,
    width: 104,
    top: 28,
    position: "absolute",
  },
  crawl: {
    left: 281,
  },
  retanguloSit: {
    left: 180,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 63,
    top: 28,
    position: "absolute",
  },
  sit: {
    left: 203,
  },
  retanguloPutHisHands: {
    width: 176,
    top: 28,
    left: 0,
    position: "absolute",
  },
  putHisHands: {
    left: 4,
  },
  questaoO: {
    left: 3,
    top: 0,
    position: "absolute",
  },
  questaoOQueOBebeFaz: {
    width: 357,
    left: 0,
    top: 0,
  },
  questionarioPagina2: {
    top: 332,
    left: 20,
    height: 315,
    width: 357,
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
  signUpTitulo: {
    top: 116,
    left: 48,
    height: 90,
  },
  signUp1: {
    left: 19,
    fontSize: FontSize.size_101xl,
    lineHeight: 114,
    fontWeight: "700",
    fontFamily: FontFamily.kodchasanBold,
    color: Color.colorIndianred_200,
    opacity: 0.09,
    top: 28,
    textAlign: "left",
  },
  signUpPagina2: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorLinen_100,
  },
});

export default SignUpPagina1;

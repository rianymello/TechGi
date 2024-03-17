import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const BabyCentralPagina1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.babyCentralPagina2}>
      <View
        style={[
          styles.reatnguloFundoBabyCentral,
          styles.navegationIconPosition,
        ]}
      />
      <Image
        style={[styles.navegationIcon, styles.navegationIconPosition]}
        contentFit="cover"
        source={require("../assets/navegation4.png")}
      />
      <Image
        style={styles.elipiseBabyCentralFundo}
        contentFit="cover"
        source={require("../assets/elipise--baby-central.png")}
      />
      <Image
        style={styles.iconBaby}
        contentFit="cover"
        source={require("../assets/icon-baby1.png")}
      />
      <View style={styles.informaesDoDia}>
        <LinearGradient
          style={styles.retanguloInfoDosDias}
          locations={[0, 0.72]}
          colors={["#efa3a8", "rgba(217, 217, 217, 0)"]}
        />
        <View style={[styles.sleepTime, styles.numerosLayout]}>
          <View style={[styles.numeros, styles.numerosLayout]}>
            <View style={[styles.numerosChild, styles.numerosLayout]} />
            <View style={[styles.ellipseParent, styles.groupParentLayout]}>
              <Image
                style={[styles.groupChild, styles.groupParentLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-57.png")}
              />
              <Text style={[styles.text, styles.textTypo2]}>20+</Text>
            </View>
            <View style={[styles.ellipseGroup, styles.textPosition]}>
              <Image
                style={[styles.groupChild, styles.groupParentLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-57.png")}
              />
              <Text style={[styles.text1, styles.textTypo2]}>10-</Text>
            </View>
            <View style={[styles.ellipseContainer, styles.groupParentLayout]}>
              <Image
                style={[styles.groupChild, styles.groupParentLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-57.png")}
              />
              <Text style={[styles.text2, styles.textTypo1]}>14</Text>
            </View>
            <View style={[styles.groupView, styles.groupParentLayout]}>
              <Image
                style={[styles.groupChild, styles.groupParentLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-57.png")}
              />
              <Text style={[styles.text3, styles.textTypo1]}>16</Text>
            </View>
            <View style={[styles.ellipseParent1, styles.groupParentLayout]}>
              <Image
                style={[styles.groupChild, styles.groupParentLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-59.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>18</Text>
            </View>
          </View>
          <Text style={[styles.sleepTime1, styles.sleepTime1Typo]}>{`Sleep Time


`}</Text>
        </View>
        <View style={[styles.breastfeedingFlow, styles.numerosLayout]}>
          <View style={[styles.numerosChild, styles.numerosLayout]} />
          <Text
            style={[styles.breastfeedingFlow1, styles.sleepTime1Typo]}
          >{`Breastfeeding Flow

`}</Text>
          <View style={[styles.low, styles.lowLayout]}>
            <View style={[styles.lowChild, styles.childLayout]} />
            <Text style={[styles.low1, styles.low1Typo]}>low</Text>
          </View>
          <View style={[styles.high, styles.lowLayout]}>
            <View style={[styles.lowChild, styles.childLayout]} />
            <Text style={[styles.high1, styles.low1Typo]}>high</Text>
          </View>
          <View style={[styles.normal, styles.lowLayout]}>
            <View style={[styles.normalChild, styles.childLayout]} />
            <Text style={[styles.normal1, styles.low1Typo]}>normal</Text>
          </View>
        </View>
        <View style={[styles.diapersUsed, styles.numerosLayout]}>
          <View style={[styles.numerosChild, styles.numerosLayout]} />
          <Text style={[styles.diapersUsed1, styles.textTypo2]}>{`Diapers Used
`}</Text>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-57.png")}
            />
            <Text style={[styles.text5, styles.textTypo2]}>8+</Text>
          </View>
          <View style={[styles.view1, styles.viewPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-57.png")}
            />
            <Text style={[styles.text6, styles.textTypo]}>4-</Text>
          </View>
          <View style={[styles.view2, styles.viewPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-57.png")}
            />
            <Text style={[styles.text7, styles.textPosition]}>5</Text>
          </View>
          <View style={[styles.view3, styles.viewPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-57.png")}
            />
            <Text style={[styles.text7, styles.textPosition]}>6</Text>
          </View>
          <View style={[styles.view4, styles.viewPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-59.png")}
            />
            <Text style={[styles.text9, styles.textPosition]}>7</Text>
          </View>
        </View>
        <Text style={[styles.dataTitulo, styles.textTypo2]}>
          Wednesday, February 7th
        </Text>
      </View>
      <Text style={styles.babyCentral}>Baby Central</Text>
      <Pressable
        style={styles.setaParaVoltarPaginaPerfil}
        onPress={() => navigation.navigate("BabyCentralPagina")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/seta-para-voltar-pagina-perfil1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navegationIconPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  numerosLayout: {
    height: 80,
    width: 308,
    position: "absolute",
  },
  groupParentLayout: {
    height: 47,
    width: 47,
  },
  textTypo2: {
    height: 15,
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  textPosition: {
    left: 19,
    position: "absolute",
  },
  textTypo1: {
    left: 16,
    height: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    top: 16,
    position: "absolute",
  },
  textTypo: {
    width: 13,
    left: 17,
    height: 15,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    top: 16,
    position: "absolute",
  },
  sleepTime1Typo: {
    top: 8,
    height: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  lowLayout: {
    height: 35,
    width: 82,
    top: 35,
    position: "absolute",
  },
  childLayout: {
    borderWidth: 3,
    borderColor: Color.colorIndianred_200,
    height: 35,
    width: 82,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  low1Typo: {
    top: 10,
    height: 15,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  viewPosition: {
    top: 28,
    height: 47,
    width: 47,
    position: "absolute",
  },
  reatnguloFundoBabyCentral: {
    backgroundColor: "#f6f1e7",
    height: 775,
    top: 0,
    width: 390,
  },
  navegationIcon: {
    top: 775,
    height: 69,
  },
  elipiseBabyCentralFundo: {
    top: -239,
    left: -52,
    width: 494,
    height: 477,
    position: "absolute",
  },
  iconBaby: {
    top: 66,
    left: 114,
    width: 162,
    height: 165,
    position: "absolute",
  },
  retanguloInfoDosDias: {
    borderColor: Color.colorLightpink_300,
    borderWidth: 1,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    height: 493,
    width: 335,
    left: 0,
    top: 0,
    position: "absolute",
  },
  numerosChild: {
    backgroundColor: Color.colorLightpink_200,
    borderRadius: Border.br_3xl,
    width: 308,
    left: 0,
    top: 0,
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    left: 10,
    width: 27,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    top: 16,
    position: "absolute",
  },
  ellipseParent: {
    left: 237,
    top: 23,
    width: 47,
    position: "absolute",
  },
  text1: {
    left: 14,
    width: 19,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    top: 16,
    position: "absolute",
  },
  ellipseGroup: {
    height: 47,
    width: 47,
    top: 23,
  },
  text2: {
    width: 15,
  },
  ellipseContainer: {
    left: 74,
    top: 23,
    width: 47,
    position: "absolute",
  },
  text3: {
    width: 14,
  },
  groupView: {
    left: 128,
    top: 23,
    width: 47,
    position: "absolute",
  },
  text4: {
    color: Color.colorWhite,
  },
  ellipseParent1: {
    left: 183,
    top: 23,
    width: 47,
    position: "absolute",
  },
  numeros: {
    left: 0,
    top: 0,
  },
  sleepTime1: {
    left: 112,
    width: 78,
  },
  sleepTime: {
    top: 336,
    left: 13,
  },
  breastfeedingFlow1: {
    left: 87,
    width: 135,
  },
  lowChild: {
    backgroundColor: Color.colorMistyrose_100,
  },
  low1: {
    left: 30,
    width: 23,
    color: Color.colorBlack,
  },
  low: {
    left: 13,
  },
  high1: {
    left: 26,
    width: 31,
    color: Color.colorBlack,
  },
  high: {
    left: 213,
  },
  normalChild: {
    backgroundColor: Color.colorIndianred_200,
  },
  normal1: {
    width: 49,
    color: Color.colorWhite,
    left: 17,
    top: 10,
  },
  normal: {
    left: 113,
  },
  breastfeedingFlow: {
    top: 213,
    left: 12,
  },
  diapersUsed1: {
    top: 7,
    left: 108,
    width: 93,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text5: {
    left: 15,
    width: 17,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    top: 16,
    position: "absolute",
  },
  view: {
    left: 240,
  },
  text6: {
    color: Color.colorBlack,
  },
  view1: {
    left: 22,
  },
  text7: {
    width: 9,
    height: 15,
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    top: 16,
  },
  view2: {
    left: 77,
  },
  view3: {
    left: 131,
  },
  text9: {
    width: 8,
    color: Color.colorWhite,
    height: 15,
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    top: 16,
  },
  view4: {
    left: 186,
  },
  diapersUsed: {
    top: 90,
    left: 13,
  },
  dataTitulo: {
    top: 32,
    left: 59,
    fontSize: FontSize.size_lg,
    width: 216,
    color: Color.colorBlack,
    position: "absolute",
  },
  informaesDoDia: {
    top: 248,
    left: 28,
    height: 493,
    width: 335,
    position: "absolute",
  },
  babyCentral: {
    top: 34,
    left: 100,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorWhite,
    textAlign: "left",
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
  babyCentralPagina2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default BabyCentralPagina1;

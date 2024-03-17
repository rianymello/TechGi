import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const BabyCentralPagina = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.babyCentralPagina1}>
      <Image
        style={[styles.navegationIcon, styles.navegationIconPosition]}
        contentFit="cover"
        source={require("../assets/navegation3.png")}
      />
      <View
        style={[
          styles.retanguloFundoBabyCentral,
          styles.navegationIconPosition,
        ]}
      />
      <Image
        style={styles.elipiseBabyCentral}
        contentFit="cover"
        source={require("../assets/elipise--baby-central.png")}
      />
      <LinearGradient
        style={[styles.retanguloCalendario, styles.retanguloBorder]}
        locations={[0, 0.72]}
        colors={["#efa3a8", "rgba(217, 217, 217, 0)"]}
      />
      <View style={[styles.calendario, styles.calendarioLayout]}>
        <View style={styles.diasDaSemana}>
          <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
          <Text style={[styles.tue, styles.tueTypo]}>Tue</Text>
          <Text style={[styles.wed, styles.monTypo]}>Wed</Text>
          <Text style={[styles.sat, styles.satPosition]}>Sat</Text>
          <Text style={[styles.fri, styles.satTypo]}>Fri</Text>
          <Text style={[styles.thu, styles.thuPosition]}>Thu</Text>
          <Text style={[styles.sun, styles.satTypo]}>Sun</Text>
        </View>
        <Image
          style={styles.circulosDoCalendario}
          contentFit="cover"
          source={require("../assets/circulos-do-calendario.png")}
        />
        <View style={[styles.botoAdicionarInformaes, styles.botoLayout]}>
          <Image
            style={[styles.botoAdicionarInformaesChild, styles.botoLayout]}
            contentFit="cover"
            source={require("../assets/ellipse.png")}
          />
          <Text style={[styles.text, styles.satTypo]}>+</Text>
        </View>
        <View style={styles.diasDoMs}>
          <Text style={styles.text1}>5</Text>
          <Text style={[styles.text2, styles.textTypo6]}>12</Text>
          <Text style={[styles.text3, styles.textTypo6]}>19</Text>
          <Text style={[styles.text4, styles.textTypo7]}>26</Text>
          <Text style={[styles.text5, styles.textTypo5]}>25</Text>
          <Text style={[styles.text6, styles.textTypo4]}>4</Text>
          <Text style={[styles.text7, styles.textTypo4]}>11</Text>
          <Text style={[styles.text8, styles.textTypo7]}>18</Text>
          <Text style={[styles.text9, styles.textTypo7]}>3</Text>
          <Text style={[styles.text10, styles.textTypo6]}>10</Text>
          <Text style={[styles.text11, styles.textPosition2]}>17</Text>
          <Text style={[styles.text12, styles.textTypo7]}>24</Text>
          <Text style={[styles.text13, styles.textTypo7]}>1</Text>
          <Text style={[styles.text14, styles.textTypo3]}>2</Text>
          <Text style={[styles.text15, styles.textTypo3]}>9</Text>
          <Text style={[styles.text16, styles.textTypo6]}>16</Text>
          <Text style={[styles.text17, styles.textTypo7]}>23</Text>
          <Text style={[styles.text18, styles.textTypo2]}>29</Text>
          <Text style={[styles.text19, styles.textTypo1]}>8</Text>
          <Text style={[styles.text20, styles.textTypo2]}>15</Text>
          <Text style={[styles.text21, styles.textTypo7]}>22</Text>
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("BabyCentralPagina1")}
          >
            <Text style={[styles.text22, styles.textTypo1]}>7</Text>
          </Pressable>
          <Text style={[styles.text23, styles.textTypo]}>14</Text>
          <Text style={[styles.text24, styles.textTypo]}>21</Text>
          <Text style={[styles.text25, styles.textPosition]}>28</Text>
          <Text style={[styles.text26, styles.textPosition]}>27</Text>
          <Text style={[styles.text27, styles.textTypo4]}>6</Text>
          <Text style={[styles.text28, styles.textPosition2]}>13</Text>
          <Text style={[styles.text29, styles.textTypo5]}>20</Text>
        </View>
        <View style={[styles.retanguloCalendario1, styles.calendarioLayout]} />
        <Text style={[styles.february, styles.februaryTypo]}>February</Text>
      </View>
      <View style={[styles.informaesPesoEAltura, styles.calendarioLayout]}>
        <View style={styles.weightPosition}>
          <View style={[styles.reatnguloWeight, styles.weightPosition]} />
          <Text style={[styles.weight1, styles.weight1Typo]}>Weight</Text>
          <Text style={[styles.kg, styles.kgPosition]}>
            <Text style={styles.text30}>4.0</Text>
            <Text style={[styles.kg1, styles.kg1Typo]}>kg</Text>
          </Text>
        </View>
        <View style={[styles.height, styles.heightLayout]}>
          <View style={[styles.retanguloHeight, styles.heightLayout]} />
          <Text style={[styles.height1, styles.weight1Typo]}>Height</Text>
          <Text style={[styles.mm, styles.kgPosition]}>
            <Text style={styles.text30}>330</Text>
            <Text style={[styles.kg1, styles.kg1Typo]}>mm</Text>
          </Text>
        </View>
      </View>
      <Text style={[styles.informationsTexto, styles.februaryTypo]}>
        Informations
      </Text>
      <Image
        style={[styles.iconBaby, styles.heightLayout]}
        contentFit="cover"
        source={require("../assets/icon-baby.png")}
      />
      <Text style={[styles.monthsTitulo, styles.satTypo]}>Months</Text>
      <Text style={[styles.nameOfThe, styles.kg1Typo]}>Name of the baby</Text>
      <Text style={[styles.babyCentral, styles.satTypo]}>Baby Central</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navegationIconPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  retanguloBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
  },
  calendarioLayout: {
    width: 312,
    position: "absolute",
  },
  monTypo: {
    width: 33,
    height: 14,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_smi,
    top: 2,
    position: "absolute",
  },
  tueTypo: {
    width: 27,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_smi,
    top: 2,
    position: "absolute",
  },
  satPosition: {
    left: 246,
    height: 14,
  },
  satTypo: {
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  thuPosition: {
    left: 163,
    height: 14,
  },
  botoLayout: {
    height: 48,
    width: 48,
    position: "absolute",
  },
  textTypo6: {
    width: 16,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  textTypo7: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  textTypo5: {
    width: 21,
    fontSize: FontSize.size_base,
    height: 14,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  textTypo4: {
    width: 13,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  textPosition2: {
    top: 71,
    height: 15,
  },
  textTypo3: {
    left: 208,
    width: 10,
    fontSize: FontSize.size_base,
    height: 14,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  textTypo2: {
    left: 164,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  textTypo1: {
    width: 12,
    fontSize: FontSize.size_base,
    height: 14,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
  },
  textTypo: {
    left: 123,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  textPosition: {
    top: 143,
    height: 14,
  },
  februaryTypo: {
    color: Color.colorIndianred_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  weightPosition: {
    width: 130,
    height: 104,
    top: 0,
    left: 0,
    position: "absolute",
  },
  weight1Typo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  kgPosition: {
    top: 31,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  kg1Typo: {
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
  },
  heightLayout: {
    width: 162,
    position: "absolute",
  },
  navegationIcon: {
    top: 772,
    height: 72,
  },
  retanguloFundoBabyCentral: {
    backgroundColor: "#f7f1e7",
    height: 775,
    top: 0,
  },
  elipiseBabyCentral: {
    top: -239,
    left: -52,
    width: 494,
    height: 477,
    position: "absolute",
  },
  retanguloCalendario: {
    top: 311,
    left: 28,
    borderColor: Color.colorLightpink_300,
    width: 335,
    height: 430,
    backgroundColor: "transparent",
    position: "absolute",
  },
  mon: {
    height: 14,
    left: 41,
  },
  tue: {
    left: 83,
    height: 14,
  },
  wed: {
    left: 120,
    height: 14,
  },
  sat: {
    width: 25,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
    color: Color.colorBlack,
    fontSize: FontSize.size_smi,
    top: 0,
  },
  fri: {
    left: 209,
    width: 20,
    height: 14,
    color: Color.colorBlack,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.josefinSansRegular,
    top: 2,
  },
  thu: {
    width: 27,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_smi,
    top: 2,
    position: "absolute",
  },
  sun: {
    width: 31,
    height: 14,
    color: Color.colorBlack,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.josefinSansRegular,
    top: 2,
    left: 0,
  },
  diasDaSemana: {
    top: 40,
    width: 271,
    height: 16,
    left: 19,
    position: "absolute",
  },
  circulosDoCalendario: {
    top: 61,
    width: 273,
    height: 64,
    left: 19,
    position: "absolute",
  },
  botoAdicionarInformaesChild: {
    top: 0,
    left: 0,
  },
  text: {
    top: 3,
    left: 13,
    fontSize: 40,
    height: 30,
    width: 19,
    color: Color.colorWhite,
  },
  botoAdicionarInformaes: {
    top: 246,
    left: 132,
  },
  text1: {
    left: 46,
    width: 10,
    fontSize: FontSize.size_base,
    top: 36,
    height: 14,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  text2: {
    height: 15,
    left: 43,
    width: 16,
    top: 71,
  },
  text3: {
    top: 107,
    left: 43,
    width: 16,
    height: 14,
  },
  text4: {
    top: 142,
    width: 19,
    height: 14,
    left: 41,
  },
  text5: {
    top: 142,
    left: 0,
  },
  text6: {
    left: 4,
    top: 36,
    height: 14,
  },
  text7: {
    left: 4,
    height: 15,
    top: 71,
  },
  text8: {
    width: 14,
    left: 4,
    top: 107,
    height: 14,
  },
  text9: {
    left: 250,
    width: 5,
    height: 14,
    top: 0,
  },
  text10: {
    top: 36,
    left: 246,
    height: 14,
  },
  text11: {
    left: 244,
    width: 15,
    height: 15,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  text12: {
    left: 242,
    top: 107,
    width: 20,
    height: 14,
  },
  text13: {
    left: 167,
    width: 7,
    height: 14,
    top: 0,
  },
  text14: {
    top: 0,
  },
  text15: {
    top: 36,
  },
  text16: {
    left: 205,
    height: 15,
    top: 71,
  },
  text17: {
    left: 204,
    top: 107,
    width: 19,
    height: 14,
  },
  text18: {
    width: 18,
    top: 143,
    height: 14,
  },
  text19: {
    left: 166,
    top: 36,
    color: Color.colorBlack,
    position: "absolute",
  },
  text20: {
    width: 15,
    height: 15,
    top: 71,
  },
  text21: {
    top: 107,
    width: 19,
    left: 163,
    height: 14,
  },
  text22: {
    color: Color.colorWhite,
  },
  pressable: {
    left: 126,
    top: 36,
    position: "absolute",
  },
  text23: {
    width: 17,
    height: 15,
    top: 71,
  },
  text24: {
    width: 15,
    top: 107,
    height: 14,
  },
  text25: {
    left: 122,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
    width: 20,
  },
  text26: {
    left: 80,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
    width: 19,
  },
  text27: {
    top: 36,
    left: 83,
    height: 14,
  },
  text28: {
    left: 82,
    width: 15,
    height: 15,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  text29: {
    left: 79,
    top: 107,
  },
  diasDoMs: {
    top: 68,
    left: 24,
    width: 262,
    height: 157,
    position: "absolute",
  },
  retanguloCalendario1: {
    borderColor: Color.colorIndianred_200,
    height: 242,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    top: 0,
    left: 0,
  },
  february: {
    top: 6,
    left: 108,
    fontSize: 24,
  },
  calendario: {
    top: 478,
    height: 294,
    left: 39,
    width: 312,
  },
  reatnguloWeight: {
    backgroundColor: Color.colorLightpink_200,
    borderRadius: Border.br_3xl,
  },
  weight1: {
    left: 42,
    top: 13,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    fontFamily: FontFamily.josefinSansRegular,
  },
  text30: {
    fontSize: FontSize.size_26xl,
    fontFamily: FontFamily.kodchasanSemiBold,
    fontWeight: "600",
  },
  kg1: {
    fontSize: FontSize.size_lg,
  },
  kg: {
    left: 19,
  },
  retanguloHeight: {
    backgroundColor: Color.colorIndianred_200,
    height: 104,
    borderRadius: Border.br_3xl,
    top: 0,
    left: 0,
  },
  height1: {
    left: 58,
    top: 13,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    fontFamily: FontFamily.josefinSansRegular,
  },
  mm: {
    left: 20,
  },
  height: {
    left: 150,
    height: 104,
    top: 0,
  },
  informaesPesoEAltura: {
    top: 350,
    height: 104,
    left: 39,
    width: 312,
  },
  informationsTexto: {
    top: 321,
    left: 143,
    width: 105,
    height: 18,
    fontSize: FontSize.size_lg,
  },
  iconBaby: {
    top: 66,
    left: 114,
    height: 165,
  },
  monthsTitulo: {
    top: 284,
    left: 173,
    width: 44,
    height: 13,
    color: Color.colorBlack,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.josefinSansRegular,
  },
  nameOfThe: {
    top: 262,
    left: 129,
    width: 132,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
    height: 15,
    color: Color.colorBlack,
  },
  babyCentral: {
    top: 34,
    left: 100,
    fontSize: FontSize.size_13xl,
    color: Color.colorWhite,
  },
  babyCentralPagina1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default BabyCentralPagina;

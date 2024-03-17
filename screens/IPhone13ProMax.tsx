import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13ProMax = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13ProMax5}>
      <Image
        style={styles.img0161Icon}
        contentFit="cover"
        source={require("../assets/img-0161.png")}
      />
      <View style={[styles.firstStepsParent, styles.firstLayout]}>
        <Text style={styles.firstSteps}>First Steps</Text>
        <Pressable
          style={[styles.firstSteps1, styles.firstLayout]}
          onPress={() => navigation.navigate("TelaIntroducao")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/first-steps-1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.iphone13ProMax5Child, styles.iphone13Bg]} />
      <View style={[styles.iphone13ProMax5Item, styles.iphone13Bg]} />
      <Image
        style={styles.vaadinsearchIcon}
        contentFit="cover"
        source={require("../assets/vaadinsearch.png")}
      />
      <Text style={styles.search}>Search</Text>
      <Text style={[styles.text, styles.gTypo]}>17:17</Text>
      <Text style={[styles.g, styles.gTypo]}>5G</Text>
      <View style={[styles.iphone13ProMax5Inner, styles.iphone13ChildLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.rectangleView, styles.iphone13ChildLayout]} />
      <View
        style={[styles.iphone13ProMax5Child1, styles.iphone13ChildLayout]}
      />
      <View
        style={[styles.iphone13ProMax5Child2, styles.rectangleIconPosition]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  firstLayout: {
    width: 66,
    position: "absolute",
  },
  iphone13Bg: {
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  gTypo: {
    height: 17,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    top: 20,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  iphone13ChildLayout: {
    width: 3,
    backgroundColor: Color.colorBlack,
  },
  rectangleIconPosition: {
    top: 24,
    position: "absolute",
  },
  img0161Icon: {
    top: -41,
    width: 428,
    height: 967,
    left: 0,
    position: "absolute",
  },
  firstSteps: {
    top: 70,
    left: 6,
    fontSize: FontSize.size_xs,
    color: "#ffd8d5",
    width: 60,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  icon: {
    borderRadius: 20,
    height: "100%",
    width: "100%",
  },
  firstSteps1: {
    top: 0,
    height: 66,
    left: 0,
  },
  firstStepsParent: {
    top: 109,
    left: 44,
    height: 86,
  },
  iphone13ProMax5Child: {
    top: 730,
    left: -5,
    width: 400,
    height: 106,
  },
  iphone13ProMax5Item: {
    top: 678,
    left: 152,
    width: 86,
    height: 32,
  },
  vaadinsearchIcon: {
    top: 689,
    left: 166,
    width: 10,
    height: 10,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    top: 686,
    left: 185,
    fontSize: FontSize.size_smi,
    width: 58,
    height: 12,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text: {
    left: 23,
    fontSize: FontSize.size_lg,
    width: 43,
  },
  g: {
    left: 307,
    fontSize: FontSize.size_base,
    width: 25,
  },
  iphone13ProMax5Inner: {
    top: 21,
    left: 298,
    height: 14,
    position: "absolute",
  },
  rectangleIcon: {
    left: 337,
    borderRadius: 5,
    width: 24,
    height: 13,
  },
  vectorIcon: {
    height: "1.62%",
    width: "7.23%",
    top: "2.73%",
    right: "6.62%",
    bottom: "95.65%",
    left: "86.15%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    top: 29,
    left: 283,
    height: 6,
    position: "absolute",
  },
  iphone13ProMax5Child1: {
    top: 27,
    left: 288,
    height: 8,
    position: "absolute",
  },
  iphone13ProMax5Child2: {
    left: 293,
    height: 11,
    width: 3,
    backgroundColor: Color.colorBlack,
  },
  iphone13ProMax5: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax;

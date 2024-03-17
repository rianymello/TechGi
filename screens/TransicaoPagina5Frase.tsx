import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TransicaoPagina5Frase = () => {
  return (
    <View style={styles.transicaoPagina5Frase}>
      <View style={styles.fraseMotivacional}>
        <Text style={[styles.precourtStephanie, styles.thereAreSoTypo]}>
          Precourt, Stephanie
        </Text>
        <Text
          style={[styles.thereAreSo, styles.thereAreSoTypo]}
        >{`“There are so many times you will feel you have failed,
But in the eyes, heart and mind of gour child, 
You are a supermom.”`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thereAreSoTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  precourtStephanie: {
    top: 164,
    left: 173,
    fontSize: FontSize.size_mini,
  },
  thereAreSo: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_6xl,
    width: 305,
  },
  fraseMotivacional: {
    top: 353,
    left: 43,
    height: 179,
    width: 305,
    position: "absolute",
  },
  transicaoPagina5Frase: {
    backgroundColor: Color.colorLightpink_300,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TransicaoPagina5Frase;

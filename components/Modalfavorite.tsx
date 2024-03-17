import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

export type ModalfavoriteType = {
  onClose?: () => void;
};

const Modalfavorite = ({ onClose }: ModalfavoriteType) => {
  return (
    <View style={styles.modalfavorite}>
      <Image
        style={styles.retanguloDetalheFundo}
        contentFit="cover"
        source={require("../assets/retangulo-detalhe-fundo.png")}
      />
      <Text style={[styles.newFolder, styles.newFolderTypo]}>New Folder</Text>
      <View style={[styles.donegrupo, styles.donegrupoLayout]}>
        <View style={[styles.retanguloDone, styles.donegrupoLayout]} />
        <Text style={[styles.doneTexto, styles.newFolderTypo]}>Done!</Text>
      </View>
      <Image
        style={[styles.retanguloFolderName, styles.retanguloLayout]}
        contentFit="cover"
        source={require("../assets/retangulo--folder-name.png")}
      />
      <Text style={[styles.folderName, styles.folderTypo]}>Folder name</Text>
      <Image
        style={[styles.retanguloFolderDescription, styles.retanguloLayout]}
        contentFit="cover"
        source={require("../assets/retangulo--folder-description.png")}
      />
      <Text style={[styles.folderDescriptionOptional, styles.folderTypo]}>
        Folder description (optional)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  newFolderTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  donegrupoLayout: {
    height: 39,
    width: 101,
    position: "absolute",
  },
  retanguloLayout: {
    width: 319,
    borderRadius: Border.br_3xs,
    left: 54,
    position: "absolute",
  },
  folderTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_mini,
    left: 63,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  retanguloDetalheFundo: {
    top: 75,
    left: 0,
    height: 347,
    position: "absolute",
    width: 427,
  },
  newFolder: {
    top: 118,
    fontSize: FontSize.size_16xl,
    left: 54,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.josefinSansRegular,
  },
  retanguloDone: {
    top: 39,
    left: 101,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorIndianred_200,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  doneTexto: {
    top: 10,
    left: 25,
    fontSize: FontSize.size_xl,
  },
  donegrupo: {
    top: 367,
    left: 272,
  },
  retanguloFolderName: {
    top: 175,
    height: 52,
  },
  folderName: {
    top: 196,
  },
  retanguloFolderDescription: {
    top: 249,
    height: 96,
  },
  folderDescriptionOptional: {
    top: 265,
  },
  modalfavorite: {
    height: 420,
    maxWidth: "100%",
    maxHeight: "100%",
    width: 427,
  },
});

export default Modalfavorite;

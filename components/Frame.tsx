import React, { useState, useCallback } from "react";
import { View, StyleSheet, Pressable, Text, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Modalfavorite from "./Modalfavorite";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

export type FrameType = {
  onClose?: () => void;
};

const Frame = ({ onClose }: FrameType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [retanguloVisible, setRetanguloVisible] = useState(false);

  const openRetangulo = useCallback(() => {
    setRetanguloVisible(true);
  }, []);

  const closeRetangulo = useCallback(() => {
    setRetanguloVisible(false);
  }, []);

  return (
    <>
      <View style={styles.addNewFolderParent}>
        <View style={[styles.addNewFolder, styles.newLayout]}>
          <View style={[styles.retanguloNewFolder, styles.newLayout]} />
          <View style={[styles.retangulo1, styles.retanguloTransform]} />
          <Pressable
            style={[styles.retangulo3, styles.retanguloTransform]}
            onPress={() => navigation.navigate("ContedosPagina1")}
          />
          <LinearGradient
            style={[styles.retangulo, styles.retanguloPosition]}
            locations={[0, 1]}
            colors={["#f5f5f5", "rgba(245, 245, 245, 0)"]}
          >
            <Pressable
              style={[styles.pressable, styles.retanguloTransform]}
              onPress={openRetangulo}
            />
          </LinearGradient>
          <View style={[styles.retangulo2, styles.retanguloPosition]} />
          <View style={[styles.linhaGrossa, styles.retanguloTransform]} />
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/.png")}
          />
          <Text style={[styles.favorites, styles.favoritesFlexBox]}>
            favorites
          </Text>
          <Text style={[styles.folderName1, styles.favoritesFlexBox]}>
            folder name 1
          </Text>
          <Text style={[styles.folderName2, styles.folderTypo]}>
            folder name 2
          </Text>
          <Text style={[styles.newFolder, styles.folderTypo]}>new folder</Text>
          <Text style={[styles.organizeYourFavorite, styles.favoritesFlexBox]}>
            organize your favorite content in folders customized by you
          </Text>
          <View style={styles.linhaFolder} />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={retanguloVisible}>
        <View style={styles.retanguloOverlay}>
          <Pressable style={styles.retanguloBg} onPress={closeRetangulo} />
          <Modalfavorite onClose={closeRetangulo} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  newLayout: {
    height: 514,
    width: 390,
    position: "absolute",
  },
  retanguloTransform: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    borderRadius: Border.br_3xs,
  },
  retanguloPosition: {
    left: 361,
    height: 140,
    width: 150,
    position: "absolute",
  },
  favoritesFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  folderTypo: {
    top: 417,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  retanguloNewFolder: {
    top: 0,
    left: 0,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    backgroundColor: Color.colorLinen_100,
  },
  retangulo1: {
    height: 140,
    left: 180,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    width: 150,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
    top: 222,
  },
  retangulo3: {
    top: 409,
    height: 140,
    left: 180,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    width: 150,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  retanguloOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  retanguloBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  pressable: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
  },
  retangulo: {
    top: 409,
  },
  retangulo2: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    left: 361,
    top: 222,
  },
  linhaGrossa: {
    top: 26,
    left: 270,
    backgroundColor: Color.colorIndianred_200,
    height: 5,
    width: 150,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  icon: {
    top: 305,
    left: 252,
    width: 69,
    height: 68,
    position: "absolute",
  },
  favorites: {
    left: 76,
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_mini,
    top: 230,
    textAlign: "left",
  },
  folderName1: {
    left: 240,
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_mini,
    top: 230,
    textAlign: "left",
  },
  folderName2: {
    left: 58,
  },
  newFolder: {
    left: 251,
  },
  organizeYourFavorite: {
    top: 468,
    left: 30,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.josefinSansLight,
    color: "#474747",
    width: 255,
  },
  linhaFolder: {
    top: 456,
    borderColor: "#a9a9a9",
    borderTopWidth: 1,
    width: 320,
    height: 1,
    borderStyle: "solid",
    left: 28,
    position: "absolute",
  },
  addNewFolder: {
    top: 27,
    left: 28,
    height: 514,
    width: 390,
  },
  addNewFolderParent: {
    width: 440,
    height: 541,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Frame;

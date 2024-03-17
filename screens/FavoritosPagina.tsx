import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import Modalfavorite from "../components/Modalfavorite";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const FavoritosPagina = () => {
  const [addnewContainerVisible, setAddnewContainerVisible] = useState(false);

  const openAddnewContainer = useCallback(() => {
    setAddnewContainerVisible(true);
  }, []);

  const closeAddnewContainer = useCallback(() => {
    setAddnewContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.favoritosPagina1}>
        <Image
          style={styles.datalhesPaginaFavoritos}
          contentFit="cover"
          source={require("../assets/datalhes--pagina-favoritos.png")}
        />
        <Image
          style={styles.navegationIcon}
          contentFit="cover"
          source={require("../assets/navegation2.png")}
        />
        <View
          style={[styles.pastasEFavoritos, styles.pastasEFavoritosPosition]}
        >
          <Text style={[styles.folderName2, styles.folderTypo]}>
            folder name 2
          </Text>
          <View style={[styles.retanguloFolder2, styles.retanguloLayout]} />
          <Text style={[styles.folderName1, styles.folderTypo]}>
            folder name 1
          </Text>
          <View style={[styles.retanguloFolder1, styles.retanguloLayout]} />
          <Text style={[styles.favoritesTexto, styles.folderTypo]}>
            favorites
          </Text>
          <View style={styles.retanguloFavorites} />
          <Pressable style={styles.addnew} onPress={openAddnewContainer}>
            <Image
              style={[styles.addIcon, styles.addIconPosition]}
              contentFit="cover"
              source={require("../assets/add.png")}
            />
            <Text style={[styles.addNewFolder, styles.addNewFolderTypo]}>
              add new folder
            </Text>
          </Pressable>
          <Text style={[styles.organizeYourFavorite, styles.addNewFolderTypo]}>
            organize your favorite content in folders customized by you
          </Text>
          <Text style={[styles.foldersTexto, styles.addIconPosition]}>
            Folders
          </Text>
        </View>
        <View
          style={[
            styles.linhaConteudoFavorito,
            styles.pastasEFavoritosPosition,
          ]}
        />
        <Text style={[styles.favoriteContents, styles.folderTypo]}>
          Favorite Contents
        </Text>
      </View>

      <Modal animationType="fade" transparent visible={addnewContainerVisible}>
        <View style={styles.addnewContainerOverlay}>
          <Pressable
            style={styles.addnewContainerBg}
            onPress={closeAddnewContainer}
          />
          <Modalfavorite onClose={closeAddnewContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  pastasEFavoritosPosition: {
    left: 31,
    position: "absolute",
  },
  folderTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
  },
  retanguloLayout: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    left: 319,
    height: 108,
    width: 319,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  addIconPosition: {
    top: 0,
    position: "absolute",
  },
  addNewFolderTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  datalhesPaginaFavoritos: {
    top: -125,
    left: -48,
    width: 595,
    height: 1063,
    position: "absolute",
  },
  navegationIcon: {
    top: 774,
    width: 390,
    height: 70,
    left: 0,
    position: "absolute",
  },
  folderName2: {
    top: 467,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    left: 2,
    position: "absolute",
  },
  retanguloFolder2: {
    top: 462,
  },
  folderName1: {
    top: 325,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    left: 2,
    position: "absolute",
  },
  retanguloFolder1: {
    top: 320,
  },
  favoritesTexto: {
    top: 183,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    left: 2,
    position: "absolute",
  },
  retanguloFavorites: {
    top: 70,
    height: 108,
    width: 319,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  addnewContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  addnewContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  addIcon: {
    left: 88,
    width: 13,
    height: 13,
  },
  addNewFolder: {
    top: 1,
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  addnew: {
    top: 46,
    left: 220,
    width: 101,
    height: 13,
    position: "absolute",
  },
  organizeYourFavorite: {
    top: 22,
    fontWeight: "300",
    fontFamily: FontFamily.josefinSansLight,
    color: Color.colorGray_100,
    width: 255,
    fontSize: FontSize.size_xs,
    left: 2,
  },
  foldersTexto: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    left: 0,
  },
  pastasEFavoritos: {
    top: 275,
    width: 321,
    height: 482,
  },
  linhaConteudoFavorito: {
    top: 218,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderTopWidth: 1,
    width: 320,
    height: 1,
  },
  favoriteContents: {
    top: 96,
    fontSize: FontSize.size_31xl,
    width: 205,
    left: 31,
    position: "absolute",
  },
  favoritosPagina1: {
    backgroundColor: "#f7f5f1",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default FavoritosPagina;

import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Frame from "../components/Frame";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ContedosPagina = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [heartIconVisible, setHeartIconVisible] = useState(false);

  const openHeartIcon = useCallback(() => {
    setHeartIconVisible(true);
  }, []);

  const closeHeartIcon = useCallback(() => {
    setHeartIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.contedosPagina1}>
        <View
          style={[styles.linhaSeparacaoConteudoECom, styles.separacaoLayout]}
        />
        <View style={[styles.contentTitle, styles.contentPosition]}>
          <View
            style={[styles.retanguloContentTitle, styles.contentPosition]}
          />
          <Text style={[styles.conteudo, styles.contentTypo]}>
            Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </Text>
          <Pressable
            style={[
              styles.setaParaVoltarAPaginaHo,
              styles.contentTitle1Position,
            ]}
            onPress={() => navigation.navigate("PaginaInicial")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/seta-para-voltar-pagina-perfil.png")}
            />
          </Pressable>
          <View style={[styles.separacao, styles.separacaoLayout]} />
          <Pressable style={styles.heart} onPress={openHeartIcon}>
            <Image
              style={[styles.icon1, styles.icon1Layout]}
              contentFit="cover"
              source={require("../assets/heart.png")}
            />
          </Pressable>
          <Text style={[styles.contentSubtitle, styles.contentTypo]}>
            Content subtitle - additional information to the title
          </Text>
          <Text style={[styles.contentTitle1, styles.contentTitle1Position]}>
            Content title
          </Text>
        </View>
        <View style={styles.addComment}>
          <Image
            style={styles.elipseFotoDoPerfil}
            contentFit="cover"
            source={require("../assets/elipse--foto-do-perfil.png")}
          />
          <Text style={[styles.iLoveThis, styles.contentTypo]}>
            i love this app!
          </Text>
          <Text style={[styles.gabriellaA, styles.contentTypo]}>
            Gabriella A.
          </Text>
          <View style={[styles.linhaAddAComment, styles.separacaoLayout]} />
          <Image
            style={[styles.lapisParaEdicao, styles.icon1Layout]}
            contentFit="cover"
            source={require("../assets/lapis-edicao--senha.png")}
          />
          <Text style={[styles.addAComment, styles.commentTypo]}>
            add a comment
          </Text>
          <Text
            style={[styles.commentAndClear, styles.commentTypo]}
          >{`comment and clear your doubts about this content here! `}</Text>
          <Text style={[styles.commentsTitulo, styles.contentTypo]}>
            Comments
          </Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={heartIconVisible}>
        <View style={styles.heartIconOverlay}>
          <Pressable style={styles.heartIconBg} onPress={closeHeartIcon} />
          <Frame onClose={closeHeartIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  separacaoLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  contentPosition: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  contentTypo: {
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
  },
  contentTitle1Position: {
    left: 19,
    position: "absolute",
  },
  icon1Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  commentTypo: {
    fontFamily: FontFamily.josefinSansLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  linhaSeparacaoConteudoECom: {
    top: 659,
    width: 320,
    borderColor: Color.colorGainsboro,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 30,
  },
  retanguloContentTitle: {
    backgroundColor: Color.colorGainsboro,
    height: 228,
  },
  conteudo: {
    top: 343,
    width: 326,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_mini,
    left: 28,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  setaParaVoltarAPaginaHo: {
    top: 23,
    width: 29,
    height: 19,
  },
  separacao: {
    top: 313,
    width: 320,
    borderColor: Color.colorGainsboro,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 30,
  },
  heartIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  heartIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  heart: {
    left: "86.13%",
    top: "32.22%",
    right: "7.38%",
    bottom: "64.31%",
    width: "6.49%",
    height: "3.47%",
    position: "absolute",
  },
  contentSubtitle: {
    top: 256,
    width: 280,
    color: Color.colorGray_100,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_mini,
    left: 28,
  },
  contentTitle1: {
    top: 192,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorGray_200,
  },
  contentTitle: {
    height: 613,
  },
  elipseFotoDoPerfil: {
    top: 125,
    width: 35,
    height: 35,
    left: 3,
    position: "absolute",
  },
  iLoveThis: {
    top: 147,
    left: 59,
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  gabriellaA: {
    top: 128,
    left: 51,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  linhaAddAComment: {
    top: 91,
    borderColor: Color.colorGray_200,
    width: 270,
    left: 3,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  lapisParaEdicao: {
    height: "9.75%",
    width: "5.22%",
    top: "46.25%",
    right: "0%",
    bottom: "44%",
    left: "94.78%",
    position: "absolute",
  },
  addAComment: {
    top: 74,
    left: 6,
    color: Color.colorDarkslategray_100,
  },
  commentAndClear: {
    top: 33,
    width: 288,
    left: 3,
    color: Color.colorGray_100,
  },
  commentsTitulo: {
    fontSize: FontSize.size_6xl,
    color: Color.colorIndianred_200,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
    left: 0,
    top: 0,
  },
  addComment: {
    top: 675,
    width: 299,
    height: 160,
    left: 30,
    position: "absolute",
  },
  contedosPagina1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ContedosPagina;

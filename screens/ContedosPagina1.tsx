import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ContedosPagina1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.contedosPagina4}>
      <View
        style={[styles.linhaSeparacaoConteudoECom, styles.separacaoLayout]}
      />
      <View style={[styles.contentTitle, styles.contentPosition]}>
        <View style={[styles.retanguloContentTitle, styles.contentPosition]} />
        <Text style={[styles.conteudo, styles.contentTypo]}>
          Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </Text>
        <Pressable
          style={[styles.setaParaVoltarAPaginaHo, styles.contentTitle1Position]}
          onPress={() => navigation.navigate("PaginaInicial")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/seta-para-voltar-pagina-perfil.png")}
          />
        </Pressable>
        <View style={[styles.separacao, styles.separacaoLayout]} />
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
          style={styles.lapisParaEdicao}
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
  icon: {
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
  contedosPagina4: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ContedosPagina1;

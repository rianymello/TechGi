import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const PaginaInicial = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.paginaInicial}>
      <View style={[styles.telaInicial, styles.telaInicialPosition]}>
        <View style={styles.mesesCategorias}>
          <View style={styles.mesesCategorias1}>
            <Text style={[styles.titulo, styles.tituloTypo]}>7-9</Text>
            <View
              style={[styles.conjuntoDesenho79, styles.conjuntoChildLayout4]}
            >
              <View
                style={[
                  styles.conjuntoDesenho79Child,
                  styles.conjuntoChildLayout4,
                ]}
              />
              <Text style={[styles.texto79, styles.textoTypo]}>7-9</Text>
              <Image
                style={styles.conjuntoDesenho79Item}
                contentFit="cover"
                source={require("../assets/vector-53.png")}
              />
              <Image
                style={styles.conjuntoDesenho79Inner}
                contentFit="cover"
                source={require("../assets/vector-54.png")}
              />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector-55.png")}
              />
              <Image
                style={styles.conjuntoDesenho79Child1}
                contentFit="cover"
                source={require("../assets/vector-56.png")}
              />
              <Image
                style={styles.conjuntoDesenho79Child2}
                contentFit="cover"
                source={require("../assets/vector-57.png")}
              />
              <Image
                style={styles.conjuntoDesenho79Child3}
                contentFit="cover"
                source={require("../assets/vector-58.png")}
              />
              <Image
                style={styles.conjuntoDesenho79Child4}
                contentFit="cover"
                source={require("../assets/vector-59.png")}
              />
              <Image
                style={[
                  styles.conjuntoDesenho79Child5,
                  styles.conjuntoChildLayout2,
                ]}
                contentFit="cover"
                source={require("../assets/vector-60.png")}
              />
              <Image
                style={styles.conjuntoDesenho79Child6}
                contentFit="cover"
                source={require("../assets/vector-61.png")}
              />
            </View>
            <Text style={[styles.titulo1, styles.tituloTypo]}>4-6</Text>
            <View
              style={[styles.conjuntoDesenho46, styles.conjuntoChildLayout4]}
            >
              <View
                style={[
                  styles.conjuntoDesenho46Child,
                  styles.conjuntoChildLayout4,
                ]}
              />
              <Text style={[styles.texto46, styles.textoTypo]}>4-6</Text>
              <Image
                style={styles.conjuntoDesenho46Item}
                contentFit="cover"
                source={require("../assets/vector-62.png")}
              />
              <Image
                style={styles.conjuntoDesenho46Inner}
                contentFit="cover"
                source={require("../assets/vector-63.png")}
              />
              <Image
                style={[
                  styles.conjuntoDesenho46Child1,
                  styles.conjuntoChildPosition,
                ]}
                contentFit="cover"
                source={require("../assets/vector-64.png")}
              />
              <Image
                style={styles.conjuntoDesenho46Child2}
                contentFit="cover"
                source={require("../assets/vector-65.png")}
              />
              <Image
                style={styles.conjuntoDesenho46Child3}
                contentFit="cover"
                source={require("../assets/vector-66.png")}
              />
              <Image
                style={styles.conjuntoDesenho46Child4}
                contentFit="cover"
                source={require("../assets/vector-67.png")}
              />
              <Image
                style={[styles.conjuntoDesenho46Child5, styles.conjuntoLayout]}
                contentFit="cover"
                source={require("../assets/vector-68.png")}
              />
            </View>
            <Text style={[styles.titulo2, styles.tituloTypo]}>1-3</Text>
            <View
              style={[styles.conjuntoDesenho13, styles.conjuntoChildLayout4]}
            >
              <View
                style={[
                  styles.conjuntoDesenho13Child,
                  styles.conjuntoChildLayout4,
                ]}
              />
              <Text style={[styles.texto79, styles.textoTypo]}>1-3</Text>
              <Image
                style={[
                  styles.conjuntoDesenho13Item,
                  styles.vectorIconPosition,
                ]}
                contentFit="cover"
                source={require("../assets/vector-621.png")}
              />
              <Image
                style={styles.conjuntoDesenho13Inner}
                contentFit="cover"
                source={require("../assets/vector-631.png")}
              />
              <Image
                style={styles.conjuntoDesenho13Child1}
                contentFit="cover"
                source={require("../assets/vector-641.png")}
              />
              <Image
                style={styles.conjuntoDesenho13Child2}
                contentFit="cover"
                source={require("../assets/vector-651.png")}
              />
              <Image
                style={[
                  styles.conjuntoDesenho13Child3,
                  styles.conjuntoChildPosition,
                ]}
                contentFit="cover"
                source={require("../assets/vector-661.png")}
              />
              <Image
                style={[
                  styles.conjuntoDesenho13Child4,
                  styles.conjuntoChildLayout2,
                ]}
                contentFit="cover"
                source={require("../assets/vector-671.png")}
              />
              <Image
                style={[
                  styles.conjuntoDesenho13Child5,
                  styles.conjuntoChildLayout1,
                ]}
                contentFit="cover"
                source={require("../assets/vector-681.png")}
              />
              <Image
                style={styles.conjuntoDesenho13Child6}
                contentFit="cover"
                source={require("../assets/vector-69.png")}
              />
              <Image
                style={[
                  styles.conjuntoDesenho13Child7,
                  styles.conjuntoChildLayout,
                ]}
                contentFit="cover"
                source={require("../assets/vector-70.png")}
              />
            </View>
            <Text style={[styles.titulo3, styles.tituloTypo]}>10-12</Text>
            <View
              style={[styles.conjuntoDesenho1012, styles.conjuntoChildLayout4]}
            >
              <View
                style={[
                  styles.conjuntoDesenho1012Child,
                  styles.conjuntoChildLayout4,
                ]}
              />
              <Image
                style={styles.conjuntoDesenho1012Item}
                contentFit="cover"
                source={require("../assets/vector-652.png")}
              />
              <Image
                style={[styles.conjuntoDesenho1012Inner, styles.conjuntoLayout]}
                contentFit="cover"
                source={require("../assets/vector-662.png")}
              />
              <Image
                style={styles.conjuntoDesenho1012Child1}
                contentFit="cover"
                source={require("../assets/vector-551.png")}
              />
              <Image
                style={styles.conjuntoDesenho1012Child2}
                contentFit="cover"
                source={require("../assets/vector-71.png")}
              />
              <Text style={[styles.texto79, styles.textoTypo]}>7-9</Text>
              <Image
                style={styles.conjuntoDesenho13Child6}
                contentFit="cover"
                source={require("../assets/vector-69.png")}
              />
              <Image
                style={[
                  styles.conjuntoDesenho13Child7,
                  styles.conjuntoChildLayout,
                ]}
                contentFit="cover"
                source={require("../assets/vector-70.png")}
              />
              <Image
                style={[
                  styles.conjuntoDesenho1012Child5,
                  styles.conjuntoChildLayout1,
                ]}
                contentFit="cover"
                source={require("../assets/vector-581.png")}
              />
              <Image
                style={[
                  styles.conjuntoDesenho1012Child6,
                  styles.conjuntoChildLayout,
                ]}
                contentFit="cover"
                source={require("../assets/vector-622.png")}
              />
              <Image
                style={[
                  styles.conjuntoDesenho1012Child7,
                  styles.conjuntoChildLayout,
                ]}
                contentFit="cover"
                source={require("../assets/vector-642.png")}
              />
            </View>
            <Text style={[styles.at2Anos, styles.tituloTypo]}>13-24</Text>
            <Image
              style={[
                styles.conjuntoDesenho1At2Anos,
                styles.conjuntoChildLayout4,
              ]}
              contentFit="cover"
              source={require("../assets/conjunto-desenho-1-at-2-anos.png")}
            />
          </View>
        </View>
        <View style={[styles.categorias, styles.popularPosition]}>
          <Text style={styles.contentSeparatedBy}>
            content separated by baby's months
          </Text>
          <Text style={[styles.categoriesTitulo, styles.tituloTypo]}>
            Categories
          </Text>
        </View>
        <View style={[styles.vistosRecentes, styles.vistosRecentesPosition]}>
          <Text style={[styles.contentYouveSeen, styles.contentTypo]}>
            content you've seen recently
          </Text>
          <Text style={[styles.categoriesTitulo, styles.tituloTypo]}>
            Recently viewed
          </Text>
        </View>
        <View style={[styles.retanguloRecentlyViewed, styles.retanguloFlexBox]}>
          <View style={styles.retangulo1Layout} />
          <View style={[styles.retangulo1Popular1, styles.retangulo1Layout]} />
          <View style={[styles.retangulo1Popular1, styles.retangulo1Layout]} />
          <Pressable
            style={[styles.retangulo1Popular1, styles.retangulo1Layout]}
            onPress={() => navigation.navigate("ContedosPagina")}
          />
          <View style={[styles.retangulo1Popular1, styles.retangulo1Layout]} />
        </View>
        <View
          style={[
            styles.adicionadosRecentemente,
            styles.vistosRecentesPosition,
          ]}
        >
          <Text
            style={[styles.newContentRecentlyContainer, styles.contentTypo]}
          >
            <Text
              style={styles.contentTypo1}
            >{`new content recently added to our app that may be of your interest `}</Text>
            <Text style={styles.text}>;)</Text>
          </Text>
          <Text style={[styles.categoriesTitulo, styles.tituloTypo]}>
            Recently added
          </Text>
        </View>
        <View style={[styles.retanguloRecentlyAdded, styles.retanguloFlexBox]}>
          <View style={styles.retangulo1Layout} />
          <View style={[styles.retangulo1Popular1, styles.retangulo1Layout]} />
          <View style={[styles.retangulo1Popular1, styles.retangulo1Layout]} />
          <Pressable
            style={[styles.retangulo1Popular1, styles.retangulo1Layout]}
            onPress={() => navigation.navigate("ContedosPagina")}
          />
          <View style={[styles.retangulo1Popular1, styles.retangulo1Layout]} />
        </View>
        <View style={[styles.popular, styles.popularPosition]}>
          <Text style={styles.contentSeparatedBy}>
            some popular content among our users, that you may like
          </Text>
          <Text style={[styles.categoriesTitulo, styles.tituloTypo]}>
            Popular
          </Text>
        </View>
        <View style={[styles.retanguloPopular, styles.retanguloFlexBox]}>
          <View style={styles.retangulo1Layout} />
          <View style={[styles.retangulo1Popular1, styles.retangulo1Layout]} />
          <View style={[styles.retangulo1Popular1, styles.retangulo1Layout]} />
          <View style={[styles.retangulo1Popular1, styles.retangulo1Layout]} />
          <View style={[styles.retangulo1Popular1, styles.retangulo1Layout]} />
        </View>
      </View>
      <View style={[styles.linhaTelaInicial, styles.conjuntoChildLayout2]} />
      <Image
        style={styles.wavesIcon}
        contentFit="cover"
        source={require("../assets/waves.png")}
      />
      <View style={styles.helloTitulo}>
        <Text style={[styles.hello, styles.tituloTypo]}>Hello,</Text>
        <Text
          style={[styles.josefinaS, styles.tituloTypo]}
        >{`Josefina S. `}</Text>
      </View>
      <Image
        style={[styles.navegationIcon, styles.telaInicialPosition]}
        contentFit="cover"
        source={require("../assets/navegation6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  telaInicialPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  tituloTypo: {
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  conjuntoChildLayout4: {
    height: 130,
    width: 130,
    borderRadius: Border.br_3xl,
    top: 0,
    position: "absolute",
  },
  textoTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  vectorIconPosition: {
    top: -9,
    position: "absolute",
  },
  conjuntoChildLayout2: {
    height: 1,
    position: "absolute",
  },
  conjuntoChildPosition: {
    top: -5,
    position: "absolute",
  },
  conjuntoLayout: {
    width: 74,
    position: "absolute",
  },
  conjuntoChildLayout1: {
    width: 88,
    position: "absolute",
  },
  conjuntoChildLayout: {
    width: 55,
    position: "absolute",
  },
  popularPosition: {
    left: 24,
    height: 35,
    position: "absolute",
  },
  vistosRecentesPosition: {
    width: 290,
    left: 24,
    position: "absolute",
  },
  contentTypo: {
    width: 288,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    left: 2,
    textAlign: "left",
    position: "absolute",
  },
  retanguloFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    width: 459,
    top: "50%",
    position: "absolute",
  },
  retangulo1Layout: {
    width: 222,
    backgroundColor: Color.colorGainsboro,
    height: 130,
    borderRadius: Border.br_3xl,
  },
  titulo: {
    left: 357,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    top: 137,
  },
  conjuntoDesenho79Child: {
    backgroundColor: "#ffd55e",
    left: 0,
  },
  texto79: {
    left: 56,
    top: 138,
  },
  conjuntoDesenho79Item: {
    top: -3,
    width: 142,
    height: 126,
    left: -11,
    position: "absolute",
  },
  conjuntoDesenho79Inner: {
    top: 4,
    left: -7,
    width: 52,
    height: 95,
    position: "absolute",
  },
  vectorIcon: {
    left: 33,
    width: 63,
    height: 72,
  },
  conjuntoDesenho79Child1: {
    top: 31,
    left: -10,
    width: 15,
    height: 44,
    position: "absolute",
  },
  conjuntoDesenho79Child2: {
    top: 6,
    left: -6,
    width: 26,
    height: 30,
    position: "absolute",
  },
  conjuntoDesenho79Child3: {
    top: 29,
    left: 58,
    width: 85,
    height: 86,
    position: "absolute",
  },
  conjuntoDesenho79Child4: {
    top: 51,
    left: 123,
    width: 11,
    height: 19,
    position: "absolute",
  },
  conjuntoDesenho79Child5: {
    left: 11,
    width: 1,
    height: 1,
    top: 138,
  },
  conjuntoDesenho79Child6: {
    top: 109,
    left: 13,
    width: 135,
    height: 29,
    position: "absolute",
  },
  conjuntoDesenho79: {
    left: 308,
    overflow: "hidden",
  },
  titulo1: {
    left: 205,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    top: 137,
  },
  conjuntoDesenho46Child: {
    backgroundColor: Color.colorLightpink_300,
    left: 0,
  },
  texto46: {
    top: 141,
    left: 54,
  },
  conjuntoDesenho46Item: {
    top: -4,
    left: 62,
    width: 12,
    height: 58,
    position: "absolute",
  },
  conjuntoDesenho46Inner: {
    top: -8,
    left: 41,
    width: 49,
    height: 85,
    position: "absolute",
  },
  conjuntoDesenho46Child1: {
    left: 25,
    width: 86,
    height: 112,
  },
  conjuntoDesenho46Child2: {
    top: 86,
    left: -4,
    width: 23,
    height: 67,
    position: "absolute",
  },
  conjuntoDesenho46Child3: {
    top: 68,
    width: 50,
    height: 79,
    left: -3,
    position: "absolute",
  },
  conjuntoDesenho46Child4: {
    left: -5,
    width: 89,
    height: 123,
    top: 24,
    position: "absolute",
  },
  conjuntoDesenho46Child5: {
    top: 39,
    left: 77,
    height: 102,
  },
  conjuntoDesenho46: {
    left: 154,
    overflow: "hidden",
  },
  titulo2: {
    left: 53,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    top: 137,
  },
  conjuntoDesenho13Child: {
    backgroundColor: "#8fb896",
    left: 0,
  },
  conjuntoDesenho13Item: {
    left: 93,
    width: 51,
    height: 62,
  },
  conjuntoDesenho13Inner: {
    top: -6,
    left: 113,
    width: 27,
    height: 32,
    position: "absolute",
  },
  conjuntoDesenho13Child1: {
    top: -10,
    left: 71,
    width: 64,
    height: 87,
    position: "absolute",
  },
  conjuntoDesenho13Child2: {
    top: 11,
    left: -19,
    width: 41,
    height: 61,
    position: "absolute",
  },
  conjuntoDesenho13Child3: {
    width: 59,
    height: 104,
    left: -11,
  },
  conjuntoDesenho13Child4: {
    top: 105,
    left: -14,
    width: 1,
    height: 1,
  },
  conjuntoDesenho13Child5: {
    top: -17,
    left: -22,
    height: 135,
  },
  conjuntoDesenho13Child6: {
    top: 85,
    left: 40,
    width: 96,
    height: 57,
    position: "absolute",
  },
  conjuntoDesenho13Child7: {
    top: 103,
    left: 79,
    height: 44,
  },
  conjuntoDesenho13: {
    left: 0,
    overflow: "hidden",
  },
  titulo3: {
    left: 506,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    top: 137,
  },
  conjuntoDesenho1012Child: {
    backgroundColor: "#a3b8ef",
    left: 0,
  },
  conjuntoDesenho1012Item: {
    top: 82,
    left: 52,
    width: 71,
    height: 45,
    position: "absolute",
  },
  conjuntoDesenho1012Inner: {
    top: 64,
    height: 97,
    left: -3,
  },
  conjuntoDesenho1012Child1: {
    top: -1,
    width: 73,
    height: 75,
    left: 79,
    position: "absolute",
  },
  conjuntoDesenho1012Child2: {
    left: 118,
    width: 28,
    height: 59,
    top: 0,
    position: "absolute",
  },
  conjuntoDesenho1012Child5: {
    top: 60,
    left: 4,
    height: 87,
  },
  conjuntoDesenho1012Child6: {
    top: 46,
    left: -18,
    height: 48,
  },
  conjuntoDesenho1012Child7: {
    top: 78,
    height: 55,
    left: 0,
  },
  conjuntoDesenho1012: {
    left: 462,
    overflow: "hidden",
  },
  at2Anos: {
    left: 659,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    top: 137,
  },
  conjuntoDesenho1At2Anos: {
    left: 616,
    overflow: "hidden",
  },
  mesesCategorias1: {
    width: 746,
    height: 157,
    top: 0,
    left: 0,
    position: "absolute",
  },
  mesesCategorias: {
    top: 701,
    width: 383,
    height: 162,
    left: 7,
    position: "absolute",
  },
  contentSeparatedBy: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    left: 2,
    fontFamily: FontFamily.josefinSansLight,
    fontWeight: "300",
    top: 23,
    textAlign: "left",
    position: "absolute",
  },
  categoriesTitulo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    top: 0,
    left: 0,
  },
  categorias: {
    top: 647,
    width: 186,
    height: 35,
  },
  contentYouveSeen: {
    fontFamily: FontFamily.josefinSansLight,
    fontWeight: "300",
    top: 23,
    width: 288,
  },
  vistosRecentes: {
    top: 241,
    height: 35,
  },
  retangulo1Popular1: {
    marginLeft: 15,
  },
  retanguloRecentlyViewed: {
    marginTop: -142.5,
    left: 7,
  },
  contentTypo1: {
    fontFamily: FontFamily.josefinSansLight,
    fontWeight: "300",
  },
  text: {
    fontFamily: FontFamily.amethystaRegular,
  },
  newContentRecentlyContainer: {
    top: 22,
  },
  adicionadosRecentemente: {
    height: 50,
    top: 24,
  },
  retanguloRecentlyAdded: {
    marginTop: -344.5,
    left: 9,
  },
  popular: {
    top: 444,
    width: 294,
    height: 35,
  },
  retanguloPopular: {
    marginTop: 60.5,
    left: 7,
  },
  telaInicial: {
    height: 875,
    top: 244,
    overflow: "hidden",
  },
  linhaTelaInicial: {
    borderStyle: "solid",
    borderColor: "#a6a0a0",
    borderTopWidth: 1,
    width: 391,
    left: 0,
    top: 244,
  },
  wavesIcon: {
    left: -73,
    width: 590,
    height: 219,
    top: 0,
    position: "absolute",
  },
  hello: {
    fontSize: FontSize.size_31xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    top: 0,
    left: 0,
  },
  josefinaS: {
    top: 58,
    left: 28,
    fontSize: FontSize.size_11xl,
    color: Color.colorIndianred_200,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
  },
  helloTitulo: {
    top: 48,
    left: 19,
    width: 167,
    height: 88,
    position: "absolute",
  },
  navegationIcon: {
    top: 1125,
    height: 63,
  },
  paginaInicial: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1195,
    overflow: "hidden",
  },
});

export default PaginaInicial;

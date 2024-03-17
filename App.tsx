const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PerfilPagina1Notificatio from "./screens/PerfilPagina1Notificatio";
import PerfilPagina from "./screens/PerfilPagina";
import FavoritosPagina from "./screens/FavoritosPagina";
import ContedosPagina from "./screens/ContedosPagina";
import ONGPagina from "./screens/ONGPagina";
import AnimacaoPagina from "./screens/AnimacaoPagina";
import SignUpPagina from "./screens/SignUpPagina";
import SignUpPagina1 from "./screens/SignUpPagina1";
import SignUpPagina2 from "./screens/SignUpPagina2";
import SignUpPagina3 from "./screens/SignUpPagina3";
import SignUpPagina4 from "./screens/SignUpPagina4";
import TelaLognInESignUp from "./screens/TelaLognInESignUp";
import LogIn1Pagina from "./screens/LogIn1Pagina";
import LogIn2Pagina from "./screens/LogIn2Pagina";
import TelaIntroducao from "./screens/TelaIntroducao";
import TransicaoPagina from "./screens/TransicaoPagina";
import TransicaoPagina1 from "./screens/TransicaoPagina1";
import TransicaoPagina2 from "./screens/TransicaoPagina2";
import TransicaoPagina4IntroA from "./screens/TransicaoPagina4IntroA";
import TransicaoPagina5Frase from "./screens/TransicaoPagina5Frase";
import AnimacaoPagina1 from "./screens/AnimacaoPagina1";
import AnimacaoPagina2 from "./screens/AnimacaoPagina2";
import AnimacaoPagina3 from "./screens/AnimacaoPagina3";
import AnimacaoPagina4 from "./screens/AnimacaoPagina4";
import BabyCentralPagina from "./screens/BabyCentralPagina";
import BabyCentralPagina1 from "./screens/BabyCentralPagina1";
import ONGPagina1 from "./screens/ONGPagina1";
import ArrowVector from "./screens/ArrowVector";
import ArrowVector1 from "./screens/ArrowVector1";
import ArrowVector2 from "./screens/ArrowVector2";
import ArrowVector3 from "./screens/ArrowVector3";
import IPhone13ProMax from "./screens/IPhone13ProMax";
import PaginaInicial from "./screens/PaginaInicial";
import ContedosPagina1 from "./screens/ContedosPagina1";
import Modalfavorite from "./components/Modalfavorite";
import Buttonnotificacao from "./components/Buttonnotificacao";
import Frame from "./components/Frame";
import Coracaofavoritefill from "./screens/Coracaofavoritefill";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "JosefinSans-Light": require("./assets/fonts/JosefinSans-Light.ttf"),
    "JosefinSans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "JosefinSans-SemiBold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
    "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "BalooBhaijaan2-Bold": require("./assets/fonts/BalooBhaijaan2-Bold.ttf"),
    "Kodchasan-SemiBold": require("./assets/fonts/Kodchasan-SemiBold.ttf"),
    "Kodchasan-Bold": require("./assets/fonts/Kodchasan-Bold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Amethysta-Regular": require("./assets/fonts/Amethysta-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PerfilPagina1Notificatio"
              component={PerfilPagina1Notificatio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilPagina"
              component={PerfilPagina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FavoritosPagina"
              component={FavoritosPagina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContedosPagina"
              component={ContedosPagina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ONGPagina"
              component={ONGPagina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AnimacaoPagina"
              component={AnimacaoPagina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPagina"
              component={SignUpPagina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPagina1"
              component={SignUpPagina1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPagina2"
              component={SignUpPagina2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPagina3"
              component={SignUpPagina3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPagina4"
              component={SignUpPagina4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaLognInESignUp"
              component={TelaLognInESignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn1Pagina"
              component={LogIn1Pagina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn2Pagina"
              component={LogIn2Pagina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaIntroducao"
              component={TelaIntroducao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransicaoPagina"
              component={TransicaoPagina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransicaoPagina1"
              component={TransicaoPagina1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransicaoPagina2"
              component={TransicaoPagina2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransicaoPagina4IntroA"
              component={TransicaoPagina4IntroA}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransicaoPagina5Frase"
              component={TransicaoPagina5Frase}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AnimacaoPagina1"
              component={AnimacaoPagina1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AnimacaoPagina2"
              component={AnimacaoPagina2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AnimacaoPagina3"
              component={AnimacaoPagina3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AnimacaoPagina4"
              component={AnimacaoPagina4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BabyCentralPagina"
              component={BabyCentralPagina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BabyCentralPagina1"
              component={BabyCentralPagina1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ONGPagina1"
              component={ONGPagina1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ArrowVector"
              component={ArrowVector}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ArrowVector1"
              component={ArrowVector1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ArrowVector2"
              component={ArrowVector2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ArrowVector3"
              component={ArrowVector3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax"
              component={IPhone13ProMax}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaginaInicial"
              component={PaginaInicial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContedosPagina1"
              component={ContedosPagina1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Modalfavorite"
              component={Modalfavorite}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Buttonnotificacao"
              component={Buttonnotificacao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Coracaofavoritefill"
              component={Coracaofavoritefill}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

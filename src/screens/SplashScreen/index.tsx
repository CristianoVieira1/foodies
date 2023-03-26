import React, { useEffect } from "react";

import Splash from "@assets/animations/logo-animated.json";
import SplashImage from "@assets/images/splashScreen.png";
import { Lottie } from "@components/Animations/Lottie";
import { useNavigation, useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { Load } from "../../components/Animations/Load";
import * as S from "./styles";

const screenWidth = Dimensions.get("window").width;
const screenHeight = (Dimensions.get("window").height * 80) / 70;

export const SplashScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Onboard");
    }, 1700);
  }, []);

  return (
    <>
      <StatusBar translucent style="light" />
      <S.Container>
        <S.AnimeSplash>
          <Lottie source={Splash} width={200} height={200} />
        </S.AnimeSplash>
        <S.Loading>
          <Load color={theme.colors.card} />
        </S.Loading>
        <ImageBackground
          source={SplashImage}
          resizeMode="stretch"
          style={styles.img}
        />
      </S.Container>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});

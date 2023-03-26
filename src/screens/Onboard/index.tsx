import Background from "@assets/images/background_onboard.png";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import Button from "../../components/Button";
import ScreenView from "../../components/ScreenView";
import * as S from "./styles";

const Onboard = () => {
  const navigation = useNavigation();
  return (
    <ScreenView statusbarColor="light" backgroundColor="darkGray">
      <S.ImageBackground
        source={Background}
        resizeMode="stretch"
        style={[
          StyleSheet.absoluteFillObject,
          { overflow: "hidden", zIndex: -1 },
        ]}
      />
      <S.Container>
        <S.Text>
          <S.Title>Comece a usar o Foodies</S.Title>
        </S.Text>
        <S.Submit>
          <Button
            title="Iniciar"
            type="accept"
            onPress={() => navigation.navigate("Phone")}
          />
        </S.Submit>
      </S.Container>
    </ScreenView>
  );
};

export default Onboard;

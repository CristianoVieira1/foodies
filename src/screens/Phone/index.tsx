import Background from "@assets/images/background_phone.png";
import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import ScreenView from "../../components/ScreenView";
import { PhoneForm } from "./components/Forms/PhoneForm";
import * as S from "./styles";

const Phone = () => {
  return (
    <ScreenView statusbarColor="light" backgroundColor="darkGray">
      <S.ImageBackground
        source={Background}
        resizeMode="contain"
        style={[
          StyleSheet.absoluteFillObject,
          { overflow: "hidden", zIndex: -1 },
        ]}
      />
      <S.Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <S.Text>
            <S.Title>Digite seu número de celular</S.Title>
          </S.Text>
          <PhoneForm />
        </KeyboardAvoidingView>
      </S.Container>
    </ScreenView>
  );
};

export default Phone;

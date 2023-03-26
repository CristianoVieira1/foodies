import Button from "@components/Button";
import InputText from "@components/InputText";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import * as S from "./styles";
import usePhoneViewModel from "./ViewModel/usePhoneViewModel";

export function PhoneForm() {
  const navigation = useNavigation();

  const {
    phoneNumber,
    isSubmitting,
    setPhoneNumber,
    dismissKeyboard,
    onOnboardChange,
    validationMessage,
    isSubmitButtonAvailable,
  } = usePhoneViewModel();

  useEffect(() => {
    dismissKeyboard();
  }, [phoneNumber]);

  return (
    <S.Form>
      <InputText
        mask="phoneNumber"
        value={phoneNumber}
        validation={validationMessage}
        keyboardType="number-pad"
        label=""
        onChangeText={(value) => setPhoneNumber(value)}
        placeholder="Número de celular"
      />

      <Button
        type={isSubmitButtonAvailable ? "accept" : "cancel"}
        title="Entrar"
        size="large"
        disabled={isSubmitButtonAvailable ? false : true}
        loading={isSubmitting}
        onPress={() => {}}
      />
    </S.Form>
  );
}

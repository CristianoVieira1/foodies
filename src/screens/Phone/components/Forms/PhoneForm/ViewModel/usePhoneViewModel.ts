import { useState } from "react";
import { Keyboard, Platform } from "react-native";
import { unMask } from "react-native-mask-text";
import {
  OnboardingFormSchema,
  useOnboarding,
} from "../../../../../../context/Onboarding";
import { KeyboardBehavior } from "../../../../../../types";
import { isValidPhoneNumber } from "../../../../../../utils/validations";
import { IPhoneViewModel } from "../Interface/IPhoneViewModel";

const usePhoneViewModel = () => {
  const { onboardingData, updateOnboardingData } = useOnboarding();
  const [validationMessage, setValidationMessage] = useState<string>("");
  // const phoneNumber = onboardingData?.phoneNumber || "";
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardBehavior =
    Platform.OS === "ios" ? "padding" : ("height" as KeyboardBehavior);
  const [isSubmitting, displaySubmittingIndicator] = useState(false);

  const onOnboardChange = (value: any, field: keyof OnboardingFormSchema) => {
    updateOnboardingData((fields) => ({ ...fields, [field]: value }));
  };

  const dismissKeyboard = () => {
    if (isValidPhoneNumber(unMask(phoneNumber))) {
      Keyboard.dismiss();
    }
  };

  const isSubmitButtonAvailable = (): boolean => {
    const phone = isValidPhoneNumber(unMask(phoneNumber));
    return phone;
  };

  const viewModel: IPhoneViewModel = {
    phoneNumber,
    isSubmitting,
    setPhoneNumber,
    dismissKeyboard,
    onOnboardChange,
    keyboardBehavior,
    validationMessage,
    isSubmitButtonAvailable: isSubmitButtonAvailable(),
  };

  return viewModel;
};

export default usePhoneViewModel;

import { OnboardingFormSchema } from "../../../../../../context/Onboarding";
import { KeyboardBehavior } from "../../../../../../types";

export interface IPhoneViewModel {
  phoneNumber: string;
  isSubmitting: boolean;
  setPhoneNumber: (value: string) => void;
  dismissKeyboard: () => void;
  onOnboardChange: (value: any, field: keyof OnboardingFormSchema) => void;
  keyboardBehavior: KeyboardBehavior;
  isSubmitButtonAvailable: boolean;
  validationMessage: string;
}

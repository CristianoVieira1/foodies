import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { WithChildren } from "../types";

interface Schema {
  resetOnboardingData: () => void;
  onboardingData: OnboardingFormSchema | null;
  updateOnboardingData: Dispatch<SetStateAction<OnboardingFormSchema | null>>;
}

export interface OnboardingFormSchema {
  userCpf?: string;
  email?: string;
  userName?: string;
  dataNumber?: string;
  phoneNumber?: string;
}

const OnboardingContext = createContext({} as Schema);

export const OnboardingProvider = ({ children }: WithChildren) => {
  const [onboardingData, updateOnboardingData] =
    useState<OnboardingFormSchema | null>({});

  function resetOnboardingData() {
    updateOnboardingData((oldState) => {
      return {
        userCpf: oldState?.userCpf,
      };
    });
  }

  return (
    <OnboardingContext.Provider
      value={{ onboardingData, updateOnboardingData, resetOnboardingData }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);

  if (context) {
    return context;
  }

  throw Error("useOnboarding should be nested into OnboardingProvider");
};

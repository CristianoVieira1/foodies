import {
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_700Bold,
  useFonts,
} from "@expo-google-fonts/public-sans";

import { UserSessionProvider, useSession } from "@context/Session";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import { ThemeProvider } from "styled-components";
import LocalStorage from "./persistence/LocalStorage";
import Routes, { navigationRef } from "./routes";
import theme from "./theme";

function App() {
  const { setSession, removeSession } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    removeSession();
  }, []);

  // async function hasUserLogged() {
  //   await LocalStorage.getUser().then((userLogged) => {
  //     if (userLogged) {
  //       setIsAuthenticated(true);
  //       const response = { user: { ...userLogged } };
  //       setSession((prevSession) => ({
  //         ...prevSession,
  //         ...response,
  //       }));
  //     }
  //   });
  // }

  async function hasUserEmailLogged() {
    await LocalStorage.getUser().then((userLogged) => {
      if (userLogged) {
        setIsAuthenticated(true);
        const response = { user: { ...userLogged } };
        setSession((prevSession) => ({
          ...prevSession,
          ...response,
        }));
      }
    });
  }

  useEffect(() => {
    hasUserEmailLogged();
  }, [isAuthenticated]);

  const [fontsLoaded] = useFonts({
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_700Bold,
  });

  if (fontsLoaded) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <NavigationContainer ref={navigationRef}>
            <StatusBar
              style="light"
              translucent
              backgroundColor="transparent"
            />
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </GestureHandlerRootView>
    );
  }
  return null;
}

export default () => (
  <UserSessionProvider>
    <RootSiblingParent>
      <App />
    </RootSiblingParent>
  </UserSessionProvider>
);

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Onboard from "../screens/Onboard";
import Phone from "../screens/Phone";

import { SplashScreen } from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export const PublicRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={"SplashScreenPage"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreenPage" component={SplashScreen} />
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="Phone" component={Phone} />
    </Stack.Navigator>
  );
};

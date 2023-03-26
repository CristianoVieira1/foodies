import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/account/Home";
const Stack = createNativeStackNavigator();

export const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Tabs"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

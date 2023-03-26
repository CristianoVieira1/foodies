import AsyncStorage from "@react-native-async-storage/async-storage";

export class PushToken {
  async getPushToken() {
    return await AsyncStorage.getItem("@pushtoken");
  }

  async setPushToken(pushToken: string) {
    return await AsyncStorage.setItem("@pushtoken", pushToken);
  }
}

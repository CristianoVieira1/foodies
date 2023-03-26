import * as SecureStore from "expo-secure-store";

const KEYS = {
  KeyUser: "LocalStorage-User",
  KeyOnboard: "LocalStorage-Onboard",
  KeyLocation: "LocalStorage-Location",
  KeyNotification: "LocalStorage-Notification",
};

class LocalStorage {
  static async getUser(): Promise<any> {
    return await SecureStore.getItemAsync(KEYS.KeyUser);
  }

  static async setUser(user: string) {
    return await SecureStore.setItemAsync(KEYS.KeyUser, user);
  }

  static async cleanUser(): Promise<any> {
    return await SecureStore.deleteItemAsync(KEYS.KeyUser);
  }

  static async getOnboard(): Promise<any> {
    return await SecureStore.getItemAsync(KEYS.KeyOnboard);
  }

  static async setOnboard(isOnboard: string) {
    return await SecureStore.setItemAsync(KEYS.KeyOnboard, isOnboard);
  }

  static async getLocation(): Promise<any> {
    return await SecureStore.getItemAsync(KEYS.KeyLocation);
  }

  static async setLocation(isLocation: string) {
    return await SecureStore.setItemAsync(KEYS.KeyLocation, isLocation);
  }

  static async getNotification(): Promise<any> {
    return await SecureStore.getItemAsync(KEYS.KeyNotification);
  }

  static async setNotification(isNotification: string) {
    return await SecureStore.setItemAsync(KEYS.KeyNotification, isNotification);
  }
}

export default LocalStorage;

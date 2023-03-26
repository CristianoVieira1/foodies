import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateToken } from "../services/network/token";

const ACCESS_TOKEN_KEY = "travel_token";

export class Auth {
  async generateToken(): Promise<string> {
    const { data } = await generateToken();
    const accessToken = data.access_token;

    await this.setAccessToken(accessToken);
    return accessToken ? `Bearer ${accessToken}` : "";
  }

  async setAccessToken(accessToken: string): Promise<void> {
    const bearerAccessToken = `Bearer ${accessToken}`;
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, bearerAccessToken);
  }

  async clearAccessToken(): Promise<void> {
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  async getAccessToken(): Promise<string> {
    const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
    return accessToken || (await this.generateToken());
  }
}

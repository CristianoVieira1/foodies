import { AxiosResponse } from "axios";

import { TokenResponse } from "../../types/Auth";
import { encodingPromisesBodies } from "../../utils/encoded";
import API from "../axios";

const params = {
  username: "app",
  password: "app@Teste123",
  grant_type: "password",
  client_id: "60A08732-1C86-475A-B089-4E621262C967",
};

export const generateToken = (): Promise<AxiosResponse<TokenResponse>> => {
  return API.post("/auth", encodingPromisesBodies(params), {
    headers: { "Content-Type": "application/json" },
  });
};

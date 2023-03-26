import axios from "axios";

const API = axios.create({
  baseURL: "https://dev.api.dashboardhr.com",
});

export default API;

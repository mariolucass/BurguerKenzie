const { default: axios } = require("axios");

export const api = axios.create({
  baseURL: "",
  timeout: 5000,
});

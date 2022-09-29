const { default: axios } = require("axios");

export const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products",
  timeout: 5000,
});

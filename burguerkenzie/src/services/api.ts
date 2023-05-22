import axios from "axios";

export const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products",
  timeout: 5000,
});

export const getAllProducts = async () => {
  const { data } = await api.get("");
  return data;
};

import axios from "axios";

export const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products",
  timeout: 5000,
});

export const apiLocation = axios.create({
  baseURL: "https://viacep.com.br/ws",
  timeout: 5000,
});

export const getAllProducts = async () => {
  const { data } = await api.get("");
  return data;
};

export const getCep = async (cep: string) => {
  const cepFormat = cep.replace(/\D/g, "");

  const { data } = await apiLocation.get(`/${cepFormat}/json/`);
  const dataObj = {
    cep: cep,
    city: data.localidade,
    district: data.bairro,
    state: data.uf,
    street: data.logradouro,
  };
  return dataObj;
};

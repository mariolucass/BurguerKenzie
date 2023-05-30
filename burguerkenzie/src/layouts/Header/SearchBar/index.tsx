import { useState } from "react";
import { SearchForm } from "./styles";
import { useProductsContext } from "../../../contexts";
import { toast } from "react-toastify";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { GoSearch } from "react-icons/go";

export const SearchBar = () => {
  const [pesquisa, setPesquisa] = useState("");
  const { products, setFilteredProducts } = useProductsContext();

  const noProducts = () => {
    toast.error(`Não encontramos o produto ou categoria procurado`);
    setFilteredProducts([]);
  };

  const searchProduct = () => {
    const lista = products.filter(
      (e) =>
        e.name.toLowerCase().includes(pesquisa.toLowerCase()) ||
        e.category.toLowerCase().includes(pesquisa.toLowerCase())
    );
    lista.length ? setFilteredProducts(lista) : noProducts();
  };

  return (
    <SearchForm
      onSubmit={(event) => {
        event.preventDefault();
        searchProduct();
      }}
    >
      <TextField
        placeholder="Busque por item"
        variant="outlined"
        type="text"
        onChange={(event) => {
          setPesquisa(event.target.value);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" color="primary" onClick={searchProduct}>
                <GoSearch />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ width: "190px" }}
      />
    </SearchForm>
  );
};

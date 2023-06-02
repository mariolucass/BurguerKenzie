import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMediaContext, useProductsContext } from "../../../contexts";
import { SearchForm } from "./styles";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState("");
  const { products, setFilteredProducts } = useProductsContext();
  const { matches768 } = useMediaContext();

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

    navigate(`/products/search/${pesquisa}`);
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
        sx={{ width: { matches768 } ? "190px" : "100%" }}
      />
    </SearchForm>
  );
};

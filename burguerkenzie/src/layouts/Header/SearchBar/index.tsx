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
  const { hasMinWidth900 } = useMediaContext();

  const searchProduct = () => {
    const lista = products.filter(
      (e) =>
        e.name.toLowerCase().includes(pesquisa) ||
        e.category.toLowerCase().includes(pesquisa)
    );

    lista.length ? setFilteredProducts(lista) : noProducts();
    navigate(`/products/search/${pesquisa}`);
  };

  const noProducts = () => {
    toast.error(`Não encontramos o produto ou categoria procurado`);
    setFilteredProducts([]);
  };

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPesquisa(event.target.value.toLowerCase());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchProduct();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <TextField
        placeholder="Busque por item"
        variant="outlined"
        type="text"
        onChange={handleSearch}
        sx={{ width: hasMinWidth900 ? "190px" : "80%" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" color="primary" onClick={searchProduct}>
                <GoSearch />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </SearchForm>
  );
};

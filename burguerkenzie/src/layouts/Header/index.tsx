import { useState } from "react";
import { toast } from "react-toastify";
import { useProductsContext } from "../../contexts";
import { ButtonHeader, HeaderDiv, InputHeader } from "./styles";

export const Header = () => {
  const [pesquisa, setPesquisa] = useState("");
  const { products, setFilteredProducts } = useProductsContext();

  const noProducts = () => {
    toast.error(`Não encontramos o produto ou categoria procurado`);
    setFilteredProducts([]);
  };

  const handleClickToHome = () => {
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
    <HeaderDiv>
      <div>
        <h1 onClick={handleClickToHome}>
          Burguer <span className="spanLogo">Kenzie</span>
        </h1>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          searchProduct();
        }}
      >
        <InputHeader
          placeholder="Digitar Pesquisa"
          type="text"
          onChange={(event) => {
            setPesquisa(event.target.value);
          }}
        />

        <ButtonHeader type="submit">Pesquisar</ButtonHeader>
      </form>
    </HeaderDiv>
  );
};

import { useState } from "react";
import { ButtonHeader, HeaderDiv, InputHeader } from "./styles";
import { toast } from "react-toastify";

export const Header = (props) => {
  const [pesquisa, setPesquisa] = useState("");

  const notify = (name) => {
    toast(`Não encontramos o produto ou categoria procurado: ${name}`);
  };
  const semProdutos = () => {
    notify(pesquisa);
    props.setFilteredProducts([]);
  };

  const searchProduct = (event) => {
    event.preventDefault();
    const lista = props.list.filter(
      (e) =>
        e.name.toLowerCase().includes(pesquisa.toLowerCase()) ||
        e.category.toLowerCase().includes(pesquisa.toLowerCase())
    );
    lista.length ? props.setFilteredProducts(lista) : semProdutos();
  };

  return (
    <HeaderDiv>
      <div>
        <h1
          onClick={() => {
            props.setFilteredProducts([]);
          }}
        >
          Burguer <span className="spanLogo">Kenzie</span>
        </h1>
      </div>

      <form action="" onSubmit={searchProduct}>
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

import { useState } from "react";
import { ButtonHeader, HeaderDiv, InputHeader } from "./styles";

export const Header = () => {
  const [pesquisa, setPesquisa] = useState("");

  const searchProduct = (event) => {
    event.preventDefault();
    console.log(pesquisa);
  };

  return (
    <HeaderDiv>
      <div>
        <h1>
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

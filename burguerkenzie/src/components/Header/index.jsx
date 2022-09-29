import { ButtonHeader, HeaderDiv, InputHeader } from "./styles";

export const Header = () => {
  const searchProduct = () => {};
  const setPesquisa = () => {};

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
          onChange={setPesquisa}
        />
        <ButtonHeader type="submit">Pesquisar</ButtonHeader>
      </form>
    </HeaderDiv>
  );
};

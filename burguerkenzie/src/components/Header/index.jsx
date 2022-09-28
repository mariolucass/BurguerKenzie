export const Header = () => {
  function searchProduct() {}
  return (
    <header>
      <div>
        <h1>Burguer</h1>
        <span className="spanLogo">Kenzie</span>
      </div>
      <form action="" onSubmit={searchProduct}>
        <input type="text" placeholder="Digitar Pesquisa" />
        <button type="submit">Pesquisar</button>
      </form>
    </header>
  );
};

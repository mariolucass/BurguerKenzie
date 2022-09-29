import { useEffect, useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { api } from "./services/api";
import { DivContainer, GlobalStyle } from "./styles/global";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    api.get().then((res) => {
      const results = res.data;
      setProducts(results);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header setFilteredProducts={setFilteredProducts} />
      <DivContainer>
        <ProductsList list={products} listFiltered={filteredProducts} />
        <Cart list={[]} cart />
      </DivContainer>
    </>
  );
}

export default App;

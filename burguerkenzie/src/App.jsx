import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

      <Header setFilteredProducts={setFilteredProducts} list={products} />

      <DivContainer>
        {filteredProducts.length ? (
          <ProductsList
            list={filteredProducts}
            cartList={currentSale}
            listFiltered={filteredProducts}
            setCurrentSale={setCurrentSale}
          />
        ) : (
          <ProductsList
            list={products}
            cartList={currentSale}
            listFiltered={filteredProducts}
            setCurrentSale={setCurrentSale}
          />
        )}
        <Cart list={currentSale} setCurrentSale={setCurrentSale} />
      </DivContainer>

      <ToastContainer />
    </>
  );
}

export default App;

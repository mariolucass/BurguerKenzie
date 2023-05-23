import { getAllProducts } from "../services/api";
import { Children, ProductInterface } from "../interfaces";
import { createContext, useContext, useEffect, useState } from "react";

interface ProductsProps {
  products: ProductInterface[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;

  filteredProducts: ProductInterface[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
}

const ProductsContext = createContext({} as ProductsProps);

export const ProductsProvider = ({ children }: Children) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>(
    []
  );
  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      setProducts(products);
    })();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);

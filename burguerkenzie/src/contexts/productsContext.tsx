import { createContext, useContext, useEffect, useState } from "react";
import { Children } from "../interfaces";
import { ProductInterface } from "../interfaces/products";
import { getAllProducts } from "../services/api";

interface ProductsProps {
  products: ProductInterface[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;

  filteredProducts: ProductInterface[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;

  productEspecific: ProductInterface;
  setProductEspecific: React.Dispatch<React.SetStateAction<ProductInterface>>;
}

const ProductsContext = createContext({} as ProductsProps);

export const ProductsProvider = ({ children }: Children) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>(
    []
  );

  const [productEspecific, setProductEspecific] = useState<ProductInterface>(
    {} as ProductInterface
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

        productEspecific,
        setProductEspecific,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);

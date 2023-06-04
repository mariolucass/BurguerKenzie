import { createContext, useContext, useEffect, useState } from "react";
import { Children } from "../interfaces";
import { ProductInterface } from "../interfaces/products";
import { getAllProducts } from "../services/api";

interface ProductsProps {
  products: ProductInterface[];

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

  const fetchProducts = async () => {
    if (products.length === 0) {
      const products = await getAllProducts();
      setProducts(products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,

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

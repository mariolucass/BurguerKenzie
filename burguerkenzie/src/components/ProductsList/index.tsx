import { AnimatePresence } from "framer-motion";
import { useProductsContext } from "../../contexts";
import { Product } from "../Product";
import { ProductList } from "./styles";

export const ProductsList = () => {
  const { products, filteredProducts } = useProductsContext();

  const listToRender = filteredProducts.length ? filteredProducts : products;

  const renderProducts = listToRender.map((elem) => (
    <Product product={elem} key={elem.id} />
  ));

  return (
    <ProductList>
      <AnimatePresence>{renderProducts}</AnimatePresence>
    </ProductList>
  );
};

import { Product } from "../Product";
import { ProductList } from "./styles";
import { useProductsContext } from "../../contexts";

export const ProductsList = () => {
  const { products, filteredProducts } = useProductsContext();
  const listToRender = filteredProducts.length ? filteredProducts : products;
  const renderProducts = listToRender.map((elem) => (
    <Product product={elem} key={elem.id} />
  ));

  return <ProductList>{renderProducts}</ProductList>;
};

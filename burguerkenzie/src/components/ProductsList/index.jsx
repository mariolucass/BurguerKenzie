import { Product } from "../Product";
import { ProductList } from "./styles";

export const ProductsList = (props) => {
  const products = props.list.map((e) => (
    <Product
      id={e.id}
      key={e.id}
      name={e.name}
      category={e.category}
      price={e.price}
      img={e.img}
    />
  ));

  return <ProductList>{products}</ProductList>;
};

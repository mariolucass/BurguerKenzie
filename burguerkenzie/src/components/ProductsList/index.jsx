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
      list={props.list}
      cartList={props.cartList}
      setCurrentSale={props.setCurrentSale}
    />
  ));

  return <ProductList>{products}</ProductList>;
};

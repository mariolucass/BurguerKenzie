import { Product } from "../Product";
import { ButtonProducts } from "../Product/styles";
import { ProductList } from "./styles";

export const ProductsList = (props) => {
  console.log(props.listFiltered);

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

  return props.listFiltered.length ? (
    <ProductList>{products}</ProductList>
  ) : (
    <ProductList>{products}</ProductList>
  );
};

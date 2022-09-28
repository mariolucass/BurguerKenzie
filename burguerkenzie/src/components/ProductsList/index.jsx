import { Product } from "../Product";

export const ProductsList = (props) => {
  const products = props.list.map((elem) => <Product />);

  return <ul>{products}</ul>;
};

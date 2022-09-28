import { ProductsList } from "../ProductsList";

export const Cart = (props) => {
  const productsCart = <ProductsList list={"lista"} />;

  return (
    <div>
      <div className="labelCart">
        <h3>Carrinho de compras</h3>
      </div>
      <div className="containerProducts">
        {props.list.length ? (
          productsCart
        ) : (
          <div className="divNoProduct">
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
          </div>
        )}
      </div>
    </div>
  );
};

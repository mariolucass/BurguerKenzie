import { Header, Cart } from "../../layouts";
import { ProductsList } from "../../components";
import { DivContainer } from "../../styles/container";

export const ProductsPage = () => (
  <>
    <Header />

    <DivContainer>
      <ProductsList />
      <Cart />
    </DivContainer>
  </>
);

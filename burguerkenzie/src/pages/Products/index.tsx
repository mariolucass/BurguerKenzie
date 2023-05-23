import { Divider } from "@mui/material";
import { MenuCategory } from "../../layouts";
import { ProductsList } from "../../components";
import { DivContainer } from "../../styles/container";

export const ProductsPage = () => (
  <DivContainer>
    <MenuCategory />

    <Divider />

    <ProductsList />
  </DivContainer>
);

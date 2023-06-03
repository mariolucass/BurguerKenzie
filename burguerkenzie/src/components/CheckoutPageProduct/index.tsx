import { Typography } from "@mui/material";
import { ProductCartInterfaceProps } from "../../interfaces/products";
import { monetizeString } from "../../utils/utils";
import {
  CartPageProductLi,
  DescriptionCartPageProduct,
  ImageCartPageProduct,
  TextCartPageProduct,
} from "./styles";

export const CheckoutPageProduct = ({ product }: ProductCartInterfaceProps) => {
  return (
    <CartPageProductLi>
      <DescriptionCartPageProduct>
        <ImageCartPageProduct>
          <img src={product.img} alt={product.name} />
        </ImageCartPageProduct>

        <TextCartPageProduct>
          <h3>{product.name}</h3>
        </TextCartPageProduct>
      </DescriptionCartPageProduct>

      <Typography
        variant="h6"
        sx={{ minWidth: "180px", padding: "8px 0 0 8px" }}
      >
        {monetizeString(product.price)}
      </Typography>
    </CartPageProductLi>
  );
};

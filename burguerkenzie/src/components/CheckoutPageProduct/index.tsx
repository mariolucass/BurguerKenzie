import { Divider, Typography } from "@mui/material";
import { useCartContext } from "../../contexts";
import { ProductCartInterfaceProps } from "../../interfaces/products";
import { monetizeString } from "../../utils/utils";
import {
  CartPageProductLi,
  DescriptionCartPageProduct,
  ImageCartPageProduct,
  TextCartPageProduct,
} from "./styles";

export const CheckoutPageProduct = ({ product }: ProductCartInterfaceProps) => {
  const { handleRemoveFromCart } = useCartContext();

  return (
    <>
      <CartPageProductLi>
        <DescriptionCartPageProduct>
          <ImageCartPageProduct>
            <img src={product.img} alt={product.name} />
          </ImageCartPageProduct>

          <TextCartPageProduct>
            <h3>{product.name}</h3>

            <Typography
              variant="h6"
              color="#828282"
              sx={{
                minWidth: "180px",
                padding: "8px 0 0 8px",
                fontWeight: "bold",
              }}
            >
              {monetizeString(product.price)}
            </Typography>
          </TextCartPageProduct>
        </DescriptionCartPageProduct>
      </CartPageProductLi>

      <Divider flexItem />
    </>
  );
};

import { Divider, Typography } from "@mui/material";
import { RxTrash } from "react-icons/rx";
import { useCartContext } from "../../contexts";
import { ProductCartInterfaceProps } from "../../interfaces/products";
import { monetizeString } from "../../utils/utils";
import { SelectQuantity } from "../SelectQuantity";
import {
  CartPageProductLi,
  DescriptionCartPageProduct,
  ImageCartPageProduct,
  InteractionsCartPageProduct,
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
          </TextCartPageProduct>
        </DescriptionCartPageProduct>

        <Typography
          variant="h6"
          color="#828282"
          sx={{ minWidth: "180px", padding: "8px 0 0 8px", fontWeight: "bold" }}
        >
          {monetizeString(product.price)}
        </Typography>

        <InteractionsCartPageProduct>
          <RxTrash onClick={() => handleRemoveFromCart(product.id)} size={24} />
          <SelectQuantity product={product} />
        </InteractionsCartPageProduct>
      </CartPageProductLi>

      <Divider flexItem />
    </>
  );
};

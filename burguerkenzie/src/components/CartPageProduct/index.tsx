import { Chip, Typography } from "@mui/material";
import { RxTrash } from "react-icons/rx";
import { useCartContext, useMediaContext } from "../../contexts";
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

export const CartPageProduct = ({ product }: ProductCartInterfaceProps) => {
  const { handleRemoveFromCart } = useCartContext();
  const price = monetizeString(product.price);
  const { hasMinWidth1024 } = useMediaContext();

  return (
    <CartPageProductLi>
      <InteractionsCartPageProduct>
        <SelectQuantity product={product} />
        <RxTrash onClick={() => handleRemoveFromCart(product.id)} size={24} />
      </InteractionsCartPageProduct>

      <DescriptionCartPageProduct>
        <ImageCartPageProduct>
          <img src={product.img} alt={product.name} />
        </ImageCartPageProduct>

        <TextCartPageProduct>
          <h3>{product.name}</h3>

          <Chip
            label={product.category}
            sx={{
              borderRadius: 2,
              width: "100px",
              color: "white",
              backgroundColor: "#27ae60",
            }}
          />
        </TextCartPageProduct>
        <Typography
          variant="h6"
          color="#828282"
          sx={{
            minWidth: "180px",
            padding: hasMinWidth1024 ? "8px 0 0 8px" : "0",
            fontWeight: "bold",
          }}
        >
          {`${price}`}
        </Typography>
      </DescriptionCartPageProduct>
    </CartPageProductLi>
  );
};

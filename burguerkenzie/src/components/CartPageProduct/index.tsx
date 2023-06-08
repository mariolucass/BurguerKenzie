import { Chip, Typography } from "@mui/material";
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

export const CartPageProduct = ({ product }: ProductCartInterfaceProps) => {
  const { handleRemoveFromCart } = useCartContext();
  const price = monetizeString(product.price);

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
          sx={{ minWidth: "180px", padding: "8px 0 0 8px", fontWeight: "bold" }}
        >
          {`${price}`}
        </Typography>
      </DescriptionCartPageProduct>
    </CartPageProductLi>
  );
};

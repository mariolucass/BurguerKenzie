import { Divider, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { useCartContext } from "../../contexts";
import { ProductCartInterfaceProps } from "../../interfaces/products";
import { monetizeString } from "../../utils/utils";
import { SelectQuantity } from "../SelectQuantity";
import {
  CartProductLi,
  ImageCartProduct,
  InteractionsCartProduct,
  StyledDiv,
  TextCartProduct,
} from "./styles";

export const CartProduct = ({ product }: ProductCartInterfaceProps) => {
  const { handleRemoveFromCart, handleQuantity } = useCartContext();
  const [quantity, setQuantity] = useState(product.quantity);

  const handleChangeQuantity = (event: SelectChangeEvent) => {
    const quantityChosen = +event.target.value;
    if (quantityChosen === 0) {
      handleRemoveFromCart(product.id);
    } else {
      handleQuantity(product.id, quantityChosen);
      setQuantity(quantityChosen);
    }
  };

  return (
    <CartProductLi>
      <ImageCartProduct>
        <img src={product.img} alt={product.name} />
      </ImageCartProduct>

      <TextCartProduct>
        <h3>{product.name}</h3>

        <Divider variant="middle" flexItem />

        <StyledDiv>
          <div>
            <Typography color={"#27ae60"} variant="subtitle2">
              {product.category}
            </Typography>

            <Typography color={""} sx={{ fontWeight: "bold" }}>
              {monetizeString(product.price)}
            </Typography>
          </div>

          <div>
            <InteractionsCartProduct>
              <SelectQuantity product={product} />

              <RxTrash
                onClick={() => handleRemoveFromCart(product.id)}
                size={24}
              />
            </InteractionsCartProduct>
          </div>
        </StyledDiv>
      </TextCartProduct>
    </CartProductLi>
  );
};

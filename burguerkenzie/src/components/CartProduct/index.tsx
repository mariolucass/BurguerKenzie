import { Divider, Typography } from "@mui/material";
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
  const { handleRemoveFromCart } = useCartContext();
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

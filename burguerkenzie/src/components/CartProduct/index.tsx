import { Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { RxTrash } from "react-icons/rx";
import { useCartContext } from "../../contexts";
import { ProductCartInterfaceProps } from "../../interfaces/products";
import { monetizeString } from "../../utils/utils";
import { SelectQuantity } from "../SelectQuantity";
import {
  CartProductLi,
  ContentDiv,
  ImageCartProduct,
  InteractionsCartProduct,
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

        <ContentDiv>
          <motion.div>
            <InteractionsCartProduct>
              <SelectQuantity product={product} />
              <RxTrash
                onClick={() => handleRemoveFromCart(product.id)}
                size={24}
              />
            </InteractionsCartProduct>
          </motion.div>
          <motion.div>
            <Typography color={"#27ae60"} variant="subtitle2">
              {product.category}
            </Typography>

            <Typography sx={{ fontWeight: "bold" }}>
              {monetizeString(product.price)}
            </Typography>
          </motion.div>
        </ContentDiv>
      </TextCartProduct>
    </CartProductLi>
  );
};

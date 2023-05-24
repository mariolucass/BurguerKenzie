import { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { useCartContext } from "../../contexts";
import { monetizeString } from "../../utils/utils";
import { ProductCartInterfaceProps } from "../../interfaces";
import {
  Chip,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import {
  CartProductLi,
  ImageCartProduct,
  InteractionsCartProduct,
  TextCartProduct,
} from "./styles";
import { FontSx } from "../../pages/EspecificProduct/styles";

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

  const renderSelectOptions = [...Array(10).keys()].map((elem) => {
    return elem == 0 ? (
      <MenuItem key={elem} value={elem} sx={FontSx}>
        {elem} (Excluir)
      </MenuItem>
    ) : (
      <MenuItem key={elem} value={elem} sx={FontSx}>
        {elem}
      </MenuItem>
    );
  });

  return (
    <CartProductLi>
      <ImageCartProduct>
        <img src={product.img} alt={product.name} />
      </ImageCartProduct>

      <TextCartProduct>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <Chip
          label={monetizeString(product.price * product.quantity)}
          sx={{
            borderRadius: 2,
            width: "75%",
            color: "white",
            fontFamily: "Inter",
          }}
        />
      </TextCartProduct>

      <InteractionsCartProduct>
        <RxTrash onClick={() => handleRemoveFromCart(product.id)} size={24} />

        <FormControl>
          <Select
            onChange={handleChangeQuantity}
            value={String(quantity)}
            sx={FontSx}
          >
            {renderSelectOptions}
          </Select>
        </FormControl>
      </InteractionsCartProduct>
    </CartProductLi>
  );
};

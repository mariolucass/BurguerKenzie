import { MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useCartContext } from "../../contexts";
import { ProductCartInterfaceProps } from "../../interfaces";
import { CartProductLi, ImageCartProduct, TextCartProduct } from "./styles";

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
      <MenuItem key={elem} value={elem}>
        {elem} (Excluir)
      </MenuItem>
    ) : (
      <MenuItem key={elem} value={elem}>
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
      </TextCartProduct>

      {/* <span>{product.category}</span>
      <Chip
        label={monetizeString(product.price * product.quantity)}
        sx={{
          borderRadius: 2,
          width: "75%",
          color: "white",
          fontFamily: "Inter",
        }}
      /> */}

      {/* <InteractionsCartProduct>
        <FormControl size="small">
          <Select onChange={handleChangeQuantity} value={String(quantity)}>
            {renderSelectOptions}
          </Select>
        </FormControl>

        <RxTrash onClick={() => handleRemoveFromCart(product.id)} size={24} />
      </InteractionsCartProduct> */}
    </CartProductLi>
  );
};

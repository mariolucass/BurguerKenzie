import { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { useCartContext } from "../../contexts";
import { monetizeString } from "../../utils/utils";
import { ProductCartInterfaceProps } from "../../interfaces";
import {
  CartPageProductLi,
  DescriptionCartPageProduct,
  ImageCartPageProduct,
  InteractionsCartPageProduct,
  TextCartPageProduct,
} from "./styles";
import {
  Chip,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

export const CartPageProduct = ({ product }: ProductCartInterfaceProps) => {
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
    <CartPageProductLi>
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
              fontFamily: "Inter",
            }}
          />
        </TextCartPageProduct>
      </DescriptionCartPageProduct>

      <Typography>
        {product.quantity != 1
          ? monetizeString(product.price) +
            " x " +
            String(product.quantity) +
            " = " +
            monetizeString(product.price * product.quantity)
          : monetizeString(product.price)}
      </Typography>

      <InteractionsCartPageProduct>
        <RxTrash onClick={() => handleRemoveFromCart(product.id)} size={24} />

        <FormControl>
          <Select onChange={handleChangeQuantity} value={String(quantity)}>
            {renderSelectOptions}
          </Select>
        </FormControl>
      </InteractionsCartPageProduct>
    </CartPageProductLi>
  );
};

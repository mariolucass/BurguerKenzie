import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useCartContext } from "../../contexts";
import { ProductCartInterfaceProps } from "../../interfaces/products";

export const SelectQuantity = ({ product }: ProductCartInterfaceProps) => {
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

  const renderSelectOptions = [...Array(10).keys()].map((elem) => (
    <MenuItem key={elem} value={elem}>
      {elem} {elem === 0 ? "(Excluir)" : ""}
    </MenuItem>
  ));

  return (
    <FormControl size="small">
      <Select onChange={handleChangeQuantity} value={String(quantity)}>
        {renderSelectOptions}
      </Select>
    </FormControl>
  );
};

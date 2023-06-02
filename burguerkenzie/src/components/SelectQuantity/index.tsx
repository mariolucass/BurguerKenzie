import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useCartContext } from "../../contexts";
import { ProductCartInterface } from "../../interfaces";

interface Props {
  product: ProductCartInterface;
}

export const SelectQuantity = ({ product }: Props) => {
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
    <FormControl size="small">
      <Select onChange={handleChangeQuantity} value={String(quantity)}>
        {renderSelectOptions}
      </Select>
    </FormControl>
  );
};

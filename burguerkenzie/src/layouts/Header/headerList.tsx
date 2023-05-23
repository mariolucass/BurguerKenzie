import { FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { ListInteractionsIcons } from "./styles";
import { useCartContext } from "../../contexts";
import { Badge } from "@mui/material";

export const HeaderList = () => {
  const { setOpenCart, currentSale } = useCartContext();

  const handleClickCart = () => {
    setOpenCart(true);
  };

  const handleClickAccount = () => {};

  return (
    <ListInteractionsIcons>
      <FaUserCircle size={"2em"} onClick={handleClickAccount} />

      <Badge badgeContent={currentSale.length} showZero className="badge">
        <FiShoppingCart size={"2em"} onClick={handleClickCart} />
      </Badge>
    </ListInteractionsIcons>
  );
};

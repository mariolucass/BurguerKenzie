import { Badge } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext, useModalContext } from "../../../contexts";
import { MenuHeader } from "../MenuHeader";
import { ListInteractionsIcons, UserMenuIcon } from "./styles";

export const HeaderList = () => {
  const { setOpenCart, currentSale } = useCartContext();
  const { handleOpenMenu, handleCloseMenu } = useModalContext();

  const handleClickCart = () => {
    setOpenCart(true);
  };

  return (
    <ListInteractionsIcons>
      <UserMenuIcon onHoverStart={handleOpenMenu}>
        <FaUserCircle size={"2em"} />
      </UserMenuIcon>

      <Badge badgeContent={currentSale.length} showZero className="badge">
        <FiShoppingCart size={"2em"} onClick={handleClickCart} />
      </Badge>

      <MenuHeader />
    </ListInteractionsIcons>
  );
};

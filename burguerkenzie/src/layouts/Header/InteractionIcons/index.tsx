import { Badge } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext, useModalContext } from "../../../contexts";
import { MenuHeader } from "../MenuHeader";
import { ListInteractionsIcons, UserMenuIcon } from "./styles";

export const HeaderList = () => {
  const { setOpenCart, currentSale } = useCartContext();
  const { handleOpenMenu } = useModalContext();

  const handleClickCart = () => setOpenCart(true);

  const size = "2em";
  return (
    <ListInteractionsIcons>
      <UserMenuIcon onHoverStart={handleOpenMenu}>
        <FaUserCircle size={size} />
      </UserMenuIcon>

      <Badge className="badge" badgeContent={currentSale.length} showZero>
        <FiShoppingCart size={size} onClick={handleClickCart} />
      </Badge>

      <MenuHeader />
    </ListInteractionsIcons>
  );
};

import { Badge } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartContext, useMediaContext } from "../../contexts";
import { HeaderDrawer } from "./Drawer";
import { HeaderList } from "./InteractionIcons";
import { SearchBar } from "./SearchBar";
import {
  HeaderDiv,
  InteractionsDiv,
  InteractionsIconsMobile,
  LogoDiv,
} from "./styles";

export const Header = () => {
  const { hasMinWidth900, hasMinWidth768, hasMinWidth1024 } = useMediaContext();

  const { currentSale, setOpenCart } = useCartContext();

  const handleClickCart = () => setOpenCart(true);

  return (
    <HeaderDiv>
      <LogoDiv>
        {!hasMinWidth1024 && (
          <InteractionsIconsMobile>
            <HeaderDrawer />

            <Badge className="badge" badgeContent={currentSale.length} showZero>
              <FiShoppingCart size={"2em"} onClick={handleClickCart} />
            </Badge>
          </InteractionsIconsMobile>
        )}
        <Link to="/dashboard">
          <h1>
            Burguer <span className="spanLogo">Kenzie</span>
          </h1>
        </Link>
      </LogoDiv>

      <InteractionsDiv>
        <SearchBar />
        {hasMinWidth1024 && <HeaderList />}
      </InteractionsDiv>
    </HeaderDiv>
  );
};

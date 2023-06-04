import { useNavigate } from "react-router-dom";
import { useMediaContext, useProductsContext } from "../../contexts";
import { HeaderDrawer } from "./Drawer";
import { HeaderList } from "./InteractionIcons";
import { SearchBar } from "./SearchBar";
import { HeaderDiv, InteractionsDiv } from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  const { hasMinWidth900 } = useMediaContext();
  const { setFilteredProducts } = useProductsContext();

  const handleClickToHome = () => {
    navigate("/dashboard");
    setFilteredProducts([]);
  };

  return (
    <HeaderDiv>
      <div>
        {hasMinWidth900 ?? <HeaderDrawer />}

        <h1 onClick={handleClickToHome}>
          Burguer <span className="spanLogo">Kenzie</span>
        </h1>
      </div>

      <InteractionsDiv>
        <SearchBar />

        {hasMinWidth900 && <HeaderList />}
      </InteractionsDiv>
    </HeaderDiv>
  );
};

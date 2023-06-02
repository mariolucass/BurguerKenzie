import { useNavigate } from "react-router-dom";
import { useMediaContext, useProductsContext } from "../../contexts";
import { HeaderList } from "./InteractionIcons";
import { SearchBar } from "./SearchBar";
import { HeaderDiv, InteractionsDiv } from "./styles";

export const Header = () => {
  const navigate = useNavigate();
  const { setFilteredProducts } = useProductsContext();
  const { matches768 } = useMediaContext();

  const handleClickToHome = () => {
    navigate("/dashboard");
    setFilteredProducts([]);
  };

  return (
    <HeaderDiv>
      <div>
        <h1 onClick={handleClickToHome}>
          Burguer <span className="spanLogo">Kenzie</span>
        </h1>
      </div>

      <InteractionsDiv>
        <SearchBar />

        {matches768 && <HeaderList />}
      </InteractionsDiv>
    </HeaderDiv>
  );
};

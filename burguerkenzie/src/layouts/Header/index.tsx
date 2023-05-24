import { useProductsContext } from "../../contexts";
import { HeaderList } from "./headerList";
import { SearchBar } from "./searchBar";
import { HeaderDiv, InteractionsDiv } from "./styles";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const { setFilteredProducts } = useProductsContext();

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
        <HeaderList />
      </InteractionsDiv>
    </HeaderDiv>
  );
};

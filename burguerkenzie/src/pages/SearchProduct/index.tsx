import { useNavigate, useParams } from "react-router-dom";
import { ProductsList } from "../../components";
import { TransitionAnimation } from "../../layouts";
import { DivContainer } from "../../styles/container";
import { TitleSection } from "./TitleSection";

export const SearchProductsPage = () => {
  const navigate = useNavigate();
  const { productSearch } = useParams();
  console.log(productSearch);

  return (
    <TransitionAnimation>
      <DivContainer>
        <TitleSection />

        <ProductsList />
      </DivContainer>
    </TransitionAnimation>
  );
};

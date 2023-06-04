import { ProductsList } from "../../components";
import { TransitionAnimation } from "../../layouts";
import { DivContainer } from "../../styles/container";
import { TitleSection } from "./TitleSection";

export const SearchProductsPage = () => {
  return (
    <TransitionAnimation>
      <DivContainer>
        <TitleSection />

        <ProductsList />
      </DivContainer>
    </TransitionAnimation>
  );
};

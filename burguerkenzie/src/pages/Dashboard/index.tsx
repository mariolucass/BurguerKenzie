import { MenuCategory } from "../../layouts";
import { TransitionAnimation } from "../../layouts";
import { DivContainer } from "../../styles/container";
import { MostOrdereds } from "./MostOrdereds";
import { ProductsCarrouselSection } from "./ProductsCarrousel";
import { WelcomeSection } from "./Welcome";

export const Dashboard = () => {
  return (
    <TransitionAnimation>
      <DivContainer>
        <MenuCategory />

        <WelcomeSection />

        <ProductsCarrouselSection />

        <MostOrdereds />

        <ProductsCarrouselSection isDrinks />
      </DivContainer>
    </TransitionAnimation>
  );
};

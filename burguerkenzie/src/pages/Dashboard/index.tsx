import { MenuCategory, TransitionAnimation } from "../../layouts";
import { DivContainer } from "../../styles/container";
import { SectionInfo } from "./InfoSection";
import { ProductsCarrouselSection } from "./ProductsCarrousel";
import { WelcomeSection } from "./Welcome";

export const Dashboard = () => {
  return (
    <TransitionAnimation>
      <DivContainer>
        <MenuCategory />

        <WelcomeSection />

        <ProductsCarrouselSection />

        <SectionInfo />
      </DivContainer>
    </TransitionAnimation>
  );
};

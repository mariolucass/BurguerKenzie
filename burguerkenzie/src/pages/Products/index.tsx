import { useEffect, useState } from "react";
import { ProductsList } from "../../components";
import { useProductsContext } from "../../contexts";
import { DivContainer } from "../../styles/container";
import { useNavigate, useParams } from "react-router-dom";
import { MenuCategory, TransitionAnimation } from "../../layouts";
import { TitleSection } from "./TitleSection";

export const ProductsPage = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const { products, setFilteredProducts } = useProductsContext();

  const handleCategory = (categoryFoundIndex: number) => {
    if (categoryFoundIndex === 1) {
      const productsFilter = products.filter((elem) => {
        return elem.category === "Sanduíches";
      });
      setFilteredProducts(productsFilter);
    } else {
      const productsFilter = products.filter((elem) => {
        return elem.category !== "Sanduíches";
      });
      setFilteredProducts(productsFilter);
    }
  };

  useEffect(() => {
    const categorys = ["favourites", "burguers", "drinks"];
    const categoryFoundIndex = categorys.indexOf(categoryName!);

    if (categoryFoundIndex !== -1) {
      if (categoryFoundIndex) {
        handleCategory(categoryFoundIndex);
      } else {
        setFilteredProducts([]);
      }
    } else {
      navigate("/dashboard");
    }
  }, []);

  return (
    <TransitionAnimation>
      <DivContainer>
        <MenuCategory />

        {/* <TitleSection /> */}

        <ProductsList />
      </DivContainer>
    </TransitionAnimation>
  );
};

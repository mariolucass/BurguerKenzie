import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsList } from "../../components";
import { useProductsContext } from "../../contexts";
import { MenuCategory, TransitionAnimation } from "../../layouts";
import { DivContainer } from "../../styles/container";

export const ProductsPage = () => {
  useEffect(() => {
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

  const { products, setFilteredProducts } = useProductsContext();

  const navigate = useNavigate();
  const { categoryName } = useParams();
  const categorys = ["favourites", "burguers", "drinks"];

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

  return (
    <TransitionAnimation>
      <DivContainer>
        <MenuCategory />

        <ProductsList />
      </DivContainer>
    </TransitionAnimation>
  );
};

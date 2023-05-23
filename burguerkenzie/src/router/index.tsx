import { AllContexts } from "../contexts";
import { Cart, Header, Footer } from "../layouts";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, ProductsPage, EspecificProductPage } from "../pages";

export const RoutesMain = () => (
  <AllContexts>
    <Header />
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:productId" element={<EspecificProductPage />} />

      <Route path="/*" element={<Navigate to={"/products"} />} />
    </Routes>
    <Footer />
    <Cart />
  </AllContexts>
);

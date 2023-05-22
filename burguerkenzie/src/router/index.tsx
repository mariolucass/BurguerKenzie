import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, ProductsPage, EspecificProductPage } from "../pages";

export const RoutesMain = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/products/:id" element={<EspecificProductPage />} />

    <Route path="/*" element={<Navigate to={"/products"} />} />
  </Routes>
);

import { AllContexts } from "../contexts";
import { AnimatePresence } from "framer-motion";
import { Cart, Header, Footer } from "../layouts";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  CartPage,
  Dashboard,
  ProductsPage,
  CheckoutPage,
  EspecificProductPage,
} from "../pages";

export const RoutesMain = () => (
  <AllContexts>
    <Header />

    <AnimatePresence>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/checkout" element={<CheckoutPage />} />

        <Route path="/products/:categoryName" element={<ProductsPage />} />
        <Route
          path="/products/:categoryName/:productId"
          element={<EspecificProductPage />}
        />
        <Route path="/*" element={<Navigate to={"/dashboard"} />} />
      </Routes>
    </AnimatePresence>

    <Cart />
    <Footer />
  </AllContexts>
);

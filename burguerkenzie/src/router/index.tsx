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
  AddCardPage,
} from "../pages";

const AllRoutes = () => (
  <AnimatePresence>
    <Routes>
      <Route element={<Dashboard />} path="/dashboard" />

      <Route path="/cart">
        <Route element={<CartPage />} index />
        <Route element={<CheckoutPage />} path="checkout" />
      </Route>

      <Route path="/products">
        <Route element={<ProductsPage />} path=":categoryName" />
        <Route
          element={<EspecificProductPage />}
          path=":categoryName/:productId"
        />
      </Route>

      <Route
        element={<Navigate to={"/dashboard"} replace={true} />}
        path="/*"
      />
    </Routes>
  </AnimatePresence>
);

export const RoutesMain = () => (
  <AllContexts>
    <Header />

    <AllRoutes />

    <Cart />
    <Footer />
  </AllContexts>
);

import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes } from "react-router-dom";
import { AllContexts } from "../contexts";
import { Cart, Footer, Header } from "../layouts";
import {
  AddCardPage,
  AddressPage,
  CartPage,
  CheckoutPage,
  Dashboard,
  EspecificProductPage,
  ProductsPage,
  ProfilePage,
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

      <Route path="/profile">
        <Route element={<ProfilePage />} index />
        <Route path="addCard" element={<AddCardPage />} />
        <Route path="address" element={<AddressPage />} />
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

import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AllContexts } from "../contexts";
import { Cart, Header } from "../layouts";
import {
  AddCardPage,
  AddressPage,
  CartPage,
  CheckoutPage,
  Dashboard,
  EspecificProductPage,
  ProductsPage,
  ProfilePage,
  SearchProductsPage,
} from "../pages";

import { useEffect } from "react";

const AllRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    const pageName = location.pathname.slice(1).split("/")[0];
    const title = pageName.charAt(0).toUpperCase() + pageName.slice(1);

    document.title = `BurguerKenzie - ${title}`;
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route element={<Dashboard />} path="/dashboard" />

        <Route path="/cart">
          <Route element={<CartPage />} index />
          <Route element={<CheckoutPage />} path="checkout" />
        </Route>

        <Route path="/products">
          <Route
            element={<Navigate to={"/dashboard"} replace={true} />}
            index
          />
          <Route element={<ProductsPage />} path=":categoryName" />
          <Route
            element={<SearchProductsPage />}
            path="search/:productSearch"
          />
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
};

export const RoutesMain = () => (
  <AllContexts>
    <Header />

    <AllRoutes />

    <Cart />
    {/* <Footer /> */}
  </AllContexts>
);

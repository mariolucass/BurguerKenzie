import { Box, Divider, Drawer, List } from "@mui/material";
import { CartProducts } from "../../components";
import { useCartContext, useMediaContext } from "../../contexts";
import { CartInteractions } from "./CartInteractions";
import { CartValue } from "./CartValue";
import { EmptyCart } from "./EmptyCart";
import { LabelCart } from "./styles";

export const Cart = () => {
  const { currentSale, openCart, setOpenCart } = useCartContext();
  const { hasMinWidth900 } = useMediaContext();

  return (
    <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
      <Box
        sx={{
          width: hasMinWidth900 ? "30vw" : "75vw",
          maxWidth: hasMinWidth900 ? "350px" : "500px",
          height: "100%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LabelCart>
          <h4>Carrinho de compras</h4>
        </LabelCart>

        <Divider flexItem />

        <List sx={{ p: 1, width: "100%" }}>
          {currentSale.length ? <CartProducts /> : <EmptyCart />}
        </List>

        {currentSale.length ? (
          <>
            <Divider flexItem />

            <CartValue />

            <Divider flexItem />

            <CartInteractions />
          </>
        ) : (
          <></>
        )}
      </Box>
    </Drawer>
  );
};

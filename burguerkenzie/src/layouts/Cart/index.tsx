import { LabelCart } from "./styles";
import { EmptyCart } from "./EmptyCart";
import { CartProducts } from "../../components";
import { useCartContext } from "../../contexts";
import { Box, Divider, Drawer, List } from "@mui/material";
import { CartValue } from "./CartValue";
import { CartInteractions } from "./CartInteractions";

export const Cart = () => {
  const { currentSale, openCart, setOpenCart } = useCartContext();

  return (
    <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
      <Box
        sx={{
          width: "30vw",
          maxWidth: "350px",
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

        <List sx={{ p: 1 }}>
          {currentSale.length ? <CartProducts /> : <EmptyCart />}
        </List>

        <Divider flexItem />

        <CartValue />

        <Divider flexItem />

        <CartInteractions />
      </Box>
    </Drawer>
  );
};

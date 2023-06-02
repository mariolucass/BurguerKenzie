import { Box, Divider, Drawer, List } from "@mui/material";
import { CartProducts } from "../../components";
import { useCartContext } from "../../contexts";
import { CartInteractions } from "./CartInteractions";
import { CartValue } from "./CartValue";
import { EmptyCart } from "./EmptyCart";
import { LabelCart } from "./styles";

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

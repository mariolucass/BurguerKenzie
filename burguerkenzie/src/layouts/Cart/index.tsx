import { LabelCart } from "./styles";
import { EmptyCart } from "./emptyCart";
import { CartProducts } from "../../components";
import { useCartContext } from "../../contexts";
import { Box, Drawer, List } from "@mui/material";

export const Cart = () => {
  const { currentSale, openCart, setOpenCart } = useCartContext();

  return (
    <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
      <Box
        sx={{ minWidth: "15vw", height: "100%", backgroundColor: "#f5f5f5" }}
      >
        <LabelCart>
          <h4>Carrinho de compras</h4>
        </LabelCart>

        <List>{currentSale.length ? <CartProducts /> : <EmptyCart />}</List>
      </Box>
    </Drawer>
  );
};

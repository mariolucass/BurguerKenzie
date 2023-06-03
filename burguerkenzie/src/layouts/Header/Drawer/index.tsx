import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export const HeaderDrawer = () => {
  const list = ["Minha conta", "Lanches", "Bebidas", "Refeicões"];

  const listRender = list.map((elem) => (
    <ListItem key={elem} disablePadding>
      <ListItemButton>
        <ListItemText primary={elem} />
      </ListItemButton>
    </ListItem>
  ));

  return (
    <Drawer anchor="left" open={true}>
      <List>{listRender}</List>
    </Drawer>
  );
};

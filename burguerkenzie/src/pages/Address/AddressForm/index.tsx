import { Box, Button, Divider, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useUserContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";
import { getCep } from "../../../services/api";
import { formatCEP } from "../../../utils/utils";
import { FormAddress } from "./styles";

export const AddressForm = () => {
  const { user, setUser } = useUserContext();

  const fetchCep = async (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const cep = event.target.value;
    if (cep.length >= 8) {
      const data = await getCep(cep);

      setUser((user) => {
        return { ...user, address: data };
      });
    }
  };

  const handleInputChange = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;

    if (name === "cep") {
      value = formatCEP(value);
    }

    setUser((user) => {
      return { ...user, address: { ...user.address, [name]: value } };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem(
      "burguerKenzie:user",
      JSON.stringify({ address: user.address })
    );
  };

  return (
    <Box
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
      sx={{
        ...BoxSx,
        gap: "1em",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FormAddress onSubmit={handleSubmit}>
        <TextField
          name="cep"
          label="CEP"
          placeholder="Cep"
          onBlur={fetchCep}
          onChange={handleInputChange}
          value={(user.address ? user.address.cep : "") || ""}
          inputProps={{ maxLength: 9 }}
          required
        />

        <TextField
          name="number"
          label="Número"
          placeholder="Número"
          value={(user.address ? user.address.number : "") || ""}
          onChange={handleInputChange}
        />

        <TextField
          name="street"
          label="Rua"
          placeholder="Rua"
          onChange={handleInputChange}
          value={(user.address ? user.address.street : "") || ""}
          disabled={!user.address || user.address.cep === ""}
        />

        <TextField
          name="district"
          label="Bairro"
          placeholder="Bairro"
          value={(user.address ? user.address.district : "") || ""}
          onChange={handleInputChange}
          disabled={!user.address || user.address.cep === ""}
        />

        <TextField
          name="city"
          label="Cidade"
          placeholder="Cidade"
          onChange={handleInputChange}
          value={(user.address ? user.address.city : "") || ""}
          disabled={!user.address || user.address.cep === ""}
        />

        <TextField
          name="state"
          label="Estado"
          placeholder="Estado"
          onChange={handleInputChange}
          inputProps={{ maxLength: 2 }}
          value={(user.address ? user.address.state : "") || ""}
          disabled={!user.address || user.address.cep === ""}
        />

        <Divider flexItem />

        <Button variant="outlined" type="submit">
          Editar Endereço
        </Button>
      </FormAddress>
    </Box>
  );
};

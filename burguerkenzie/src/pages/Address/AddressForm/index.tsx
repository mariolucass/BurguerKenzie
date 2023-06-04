import { Box, Button, Divider, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
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
  const { address, setAddress } = useUserContext();

  useEffect(() => getAddressIfHasToken(), []);

  const getAddressIfHasToken = () => {
    const token = localStorage.getItem("burguerKenzie:address");
    if (token) {
      const data = JSON.parse(token);
      setAddress(data);
    }
  };

  const fetchCep = async (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const cep = event.target.value;
    if (cep.length >= 8) {
      const data = await getCep(cep);
      setAddress(data);
    }
  };

  const handleInputChange = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;

    if (name === "cep") {
      value = formatCEP(value);
    }

    setAddress((address) => {
      return { ...address, [name]: value };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("burguerKenzie:address", JSON.stringify(address));
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
          value={address.cep || ""}
          inputProps={{ maxLength: 9 }}
          required
        />

        <TextField
          name="number"
          label="Número"
          placeholder="Número"
          value={address.number || ""}
          onChange={handleInputChange}
        />

        <TextField
          name="street"
          label="Rua"
          placeholder="Rua"
          value={address.street || ""}
          onChange={handleInputChange}
        />

        <TextField
          name="district"
          label="Bairro"
          placeholder="Bairro"
          value={address.district || ""}
          onChange={handleInputChange}
        />

        <TextField
          name="city"
          label="Cidade"
          placeholder="Cidade"
          value={address.city || ""}
          onChange={handleInputChange}
        />

        <TextField
          name="state"
          label="Estado"
          placeholder="Estado"
          value={address.state || ""}
          onChange={handleInputChange}
          inputProps={{ maxLength: 2 }}
        />

        <Divider flexItem />

        <Button variant="outlined" type="submit">
          Editar Endereço
        </Button>
      </FormAddress>
    </Box>
  );
};

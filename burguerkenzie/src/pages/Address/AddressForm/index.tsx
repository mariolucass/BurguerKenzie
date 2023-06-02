import { Box, Button, Divider, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useUserContext } from "../../../contexts";
import { getCep } from "../../../services/api";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";
import { FormAddress } from "./styles";

export const AddressForm = () => {
  const { address, setAddress } = useUserContext();
  useEffect(() => {
    const token = localStorage.getItem("burguerKenzie:address");
    if (token) {
      const { cep, city, district, state, street, number } = JSON.parse(token);
      setAddress({
        cep: cep,
        city: city,
        state: state,
        number: number,
        street: street,
        district: district,
      });
    }
  }, []);

  const checkCep = async (e: any) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (cep.length >= 8) {
      const { localidade, bairro, uf, logradouro } = await getCep(cep);
      setAddress({
        cep: cep,
        city: localidade,
        district: bairro,
        state: uf,
        street: logradouro,
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
    setAddress((address) => {
      return { ...address, [name]: value };
    });
  };

  const formatCEP = (value: string) => {
    if (value.length === 5) {
      value += "-";
    }

    setAddress((data) => {
      return { ...data, cep: value };
    });

    return value;
  };

  return (
    <Box
      sx={{
        borderRadius: 1,
        padding: 6,
        backgroundColor: "white",
        display: "flex",
        gap: "1em",
        justifyContent: "center",
      }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <FormAddress
        onSubmit={(event: any) => {
          event.preventDefault();

          localStorage.setItem(
            "burguerKenzie:address",
            JSON.stringify(address)
          );
        }}
      >
        <TextField
          name="cep"
          label="CEP"
          placeholder="Cep"
          onBlur={checkCep}
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

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../../contexts";
import {
  animateHiddenLi,
  animateHiddenUl,
  animateShownLi,
  animateShownUl,
} from "../../../libs/framer";
import { NavMenuStyled } from "./styles";

export const MenuHeader = () => {
  const navigate = useNavigate();
  const { openMenu, handleCloseMenu } = useModalContext();

  const handleRedirectToProfile = () => navigate("/profile");
  const handleRedirectToAddCard = () => navigate("/profile/addCard");
  const handleRedirectToAddress = () => navigate("/profile/address");

  const animateMenuIfMenuIsOpen = openMenu ? animateShownUl : animateHiddenUl;
  const animateItemIfMenuIsOpen = openMenu ? animateShownLi : animateHiddenLi;

  return (
    <NavMenuStyled
      onHoverEnd={handleCloseMenu}
      animate={animateMenuIfMenuIsOpen}
      style={{
        pointerEvents: openMenu ? "auto" : "none",
        clipPath: "inset(10% 50% 90% 50% round 10px)",
      }}
    >
      <motion.li
        animate={animateItemIfMenuIsOpen}
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </motion.li>

      <motion.li
        animate={animateItemIfMenuIsOpen}
        onClick={handleRedirectToAddress}
      >
        Editar Endereço
      </motion.li>

      <motion.li
        animate={animateItemIfMenuIsOpen}
        onClick={handleRedirectToProfile}
      >
        Editar Perfil
      </motion.li>

      <motion.li
        animate={animateItemIfMenuIsOpen}
        onClick={handleRedirectToAddCard}
      >
        Adicionar Cartão
      </motion.li>
    </NavMenuStyled>
  );
};

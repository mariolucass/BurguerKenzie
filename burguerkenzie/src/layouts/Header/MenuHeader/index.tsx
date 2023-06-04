import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../../contexts";
import { animateHiddenUl, animateShownUl } from "../../../libs/framer";
import { NavMenuStyled } from "./styles";

export const MenuHeader = () => {
  const navigate = useNavigate();
  const { openMenu, handleCloseMenu } = useModalContext();

  const animateIfMenuIsOpen = openMenu ? animateShownUl : animateHiddenUl;

  const handleRedirectToProfile = () => navigate("/profile");
  const handleRedirectToAddCard = () => navigate("/profile/addCard");
  const handleRedirectToAddress = () => navigate("/profile/address");

  return (
    <NavMenuStyled
      onHoverEnd={handleCloseMenu}
      animate={animateIfMenuIsOpen}
      style={{
        pointerEvents: openMenu ? "auto" : "none",
        clipPath: "inset(10% 50% 90% 50% round 10px)",
      }}
    >
      <motion.li
        animate={animateIfMenuIsOpen}
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </motion.li>

      <motion.li
        animate={animateIfMenuIsOpen}
        onClick={handleRedirectToAddress}
      >
        Editar Endereço
      </motion.li>

      <motion.li
        animate={animateIfMenuIsOpen}
        onClick={handleRedirectToProfile}
      >
        Editar Perfil
      </motion.li>

      <motion.li
        animate={animateIfMenuIsOpen}
        onClick={handleRedirectToAddCard}
      >
        Adicionar Cartão
      </motion.li>
    </NavMenuStyled>
  );
};

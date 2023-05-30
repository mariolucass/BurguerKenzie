import { motion } from "framer-motion";
import { ListMenuStyled } from "./styles";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../../contexts";
import { animateHiddenUl, animateShownUl } from "../../../libs/framer";

export const MenuHeader = () => {
  const navigate = useNavigate();
  const { openMenu, handleCloseMenu } = useModalContext();

  const animateIfMenuIsOpen = openMenu ? animateShownUl : animateHiddenUl;

  const handleRedirectToProfile = () => {};
  const handleRedirectToAddCard = () => {};
  const handleLogoutUser = () => {};

  return (
    <motion.nav className="menu">
      <ListMenuStyled
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

        <motion.li animate={animateIfMenuIsOpen} onClick={handleLogoutUser}>
          Sair
        </motion.li>
      </ListMenuStyled>
    </motion.nav>
  );
};

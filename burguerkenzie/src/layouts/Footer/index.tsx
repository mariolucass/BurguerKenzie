import { Divider, Typography } from "@mui/material";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useProductsContext } from "../../contexts";
import { FooterDiv } from "./styles";

export const Footer = () => {
  const navigate = useNavigate();
  const { setFilteredProducts } = useProductsContext();

  const handleClickToHome = () => {
    navigate("/dashboard");
    setFilteredProducts([]);
  };

  const projectOwner = {
    id: 1,
    nome: "Mário",
    img: "https://avatars.githubusercontent.com/u/105565220?v=4",
    linkedin: "https://www.linkedin.com/in/mariolucass/",
    github: "https://github.com/mariolucass",
  };

  return (
    <FooterDiv>
      <ul>
        <li key={projectOwner.id}>
          <span>LinkedIn</span>
          <a href={projectOwner.linkedin} target="_blank">
            <AiFillLinkedin size={25} />
          </a>

          <span>GitHub</span>
          <a href={projectOwner.github} target="_blank">
            <AiFillGithub size={25} />
          </a>
        </li>
      </ul>

      <Divider flexItem />

      <Typography>2023 All Rights Reserved.</Typography>
    </FooterDiv>
  );
};

import styled from "styled-components";

export const ProductList = styled.ul`
  height: 350px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  justify-content: center;

  @media (min-width: 1023px) {
    width: 62.5%;
    flex-wrap: wrap;
    height: 40%;
    max-width: 1000px;
  }
`;

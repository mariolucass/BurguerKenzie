import styled from "styled-components";

export const ProductList = styled.ul`
  margin-top: 20px;
  height: 350px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;

  @media (min-width: 1023px) {
    width: 70%;
    flex-wrap: wrap;
    height: 40%;
    max-width: 1000px;
  }
`;

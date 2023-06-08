import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5em;
  .rccs__card {
    font-family: "Inter";
  }
  @media (min-width: 1023px) {
    margin: 0 115px;
  }
`;

import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;

  @media (min-width: 1023px) {
    margin: 0 115px;
    flex-direction: row;
  }
`;

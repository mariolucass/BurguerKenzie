import styled from "styled-components";

export const FooterDiv = styled.div`
  width: 100%;
  margin-top: 150px;
  height: 204px;
  background-color: var(--gray-100);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);

  .spanLogo {
    color: red;
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    justify-content: center;
    height: 204px;

    h1 {
      margin-left: 115px;
    }
  }
`;

import styled from "styled-components";

export const DivCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;

  .labelCart {
    display: flex;
    background-color: var(--color-primary);
    color: var(--white);
    height: 50px;
    align-items: center;
    padding-left: 1rem;
    border-radius: 5px 5px 0px 0px;
  }

  .divNoProduct {
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: var(--gray-0);
  }
`;

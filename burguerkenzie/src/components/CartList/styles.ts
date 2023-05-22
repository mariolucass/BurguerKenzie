import styled from "styled-components";

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--gray-0);
  padding: 1rem;

  .cartValue {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top: 3px var(--gray-20) solid;
  }

  .cartValue div {
    font-weight: 600;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .cartValue button {
    width: 90%;
    height: 60px;
    background-color: var(--gray-20);
    color: var(--gray-50);
    margin: 0 auto;
    border-radius: 0.5rem;
  }

  .totalValue {
    color: var(--gray-50);
  }
`;

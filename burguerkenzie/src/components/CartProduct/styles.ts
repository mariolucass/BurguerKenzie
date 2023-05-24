import styled from "styled-components";

export const CartProductLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  margin: 0 auto;
`;

export const TextCartProduct = styled.div`
  width: 40%;
  height: 100%;
  padding: 8px 0 0 8px;
  height: 100px;
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  align-items: center;

  h3 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  span {
    color: var(--gray-50);
    font-size: 12px;
  }
`;

export const ImageCartProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: var(--gray-20);
  padding: 0.9rem;
  border-radius: 0.3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const InteractionsCartProduct = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

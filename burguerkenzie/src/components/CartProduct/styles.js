import styled from "styled-components";

export const ButtonRemove = styled.button``;

export const CartProductLi = styled.li`
  display: flex;

  .imgDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background-color: var(--gray-0);
    padding: 1rem;
  }

  .imgDiv img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .textDiv {
  }
`;

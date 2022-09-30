import styled, { keyframes } from "styled-components";
import { bounceInRight } from "react-animations";

const bounceAnimation = keyframes`${bounceInRight}`;

export const ButtonRemove = styled.button`
  color: var(--gray-button);
  font-size: 12px;

  :hover {
    text-decoration: underline;
  }

  :active {
  }

  :focus {
  }
`;

export const CartProductLi = styled.li`
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 50%;
  margin: 0 auto;
  animation: 1s ${bounceAnimation};

  .imgDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: var(--gray-20);
    padding: 0.9rem;
    border-radius: 0.3rem;
  }

  .imgDiv img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .textDiv {
    width: 40%;
    height: 100%;
  }

  .textDiv h3 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .textDiv span {
    color: var(--gray-50);
    font-size: 12px;
  }
`;

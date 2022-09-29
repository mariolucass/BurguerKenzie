import styled from "styled-components";

export const CardProduct = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid var(--gray-20);
  align-items: center;

  .imgDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 150px;
    background-color: var(--gray-0);
    padding: 1rem;
  }

  .imgDiv img {
    width: 60%;
    height: 100%;
    object-fit: cover;
  }

  .textDiv {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .textDiv span {
    font-size: 1rem;
  }
`;

export const ButtonProducts = styled.button`
  color: var(--white);
  background-color: var(--color-primary);
  position: relative;
  bottom: 0%;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 0.5rem;
`;

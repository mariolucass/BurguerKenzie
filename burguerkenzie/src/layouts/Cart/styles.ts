import styled from "styled-components";

export const LabelCart = styled.div`
  display: flex;
  background-color: var(--color-primary);
  color: var(--white);
  height: 50px;
  align-items: center;
  padding-left: 1rem;
`;

export const EmptyCartDiv = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--gray-0);
`;

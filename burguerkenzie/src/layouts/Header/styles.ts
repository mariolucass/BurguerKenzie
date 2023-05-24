import styled from "styled-components";

export const HeaderDiv = styled.header`
  display: flex;
  background-color: var(--gray-0);
  flex-direction: column;
  width: calc(100vw);
  height: 150px;
  padding: 1rem;
  align-items: center;
  border-bottom: 2px solid var(--gray-50);

  svg {
    filter: invert(57%) sepia(21%) saturate(1491%) hue-rotate(93deg)
      brightness(94%) contrast(81%);
  }
  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
    height: 48px;
  }

  h1 {
    cursor: pointer;
  }

  .spanLogo {
    color: red;
    font-size: 1.2rem;
  }

  .badge {
    span {
      background-color: var(--color-primary);
      color: var(--white);
      font-family: "Inter";
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 100px;

    h1 {
      margin-left: 115px;
    }
  }
`;

export const SearchForm = styled.form`
  width: 100%;

  @media (min-width: 768px) {
    width: 30%;
    max-width: 400px;
  }
`;

export const InteractionsDiv = styled.div`
  width: 30%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  gap: 1.5em;
  margin-right: 100px;
`;

export const ListInteractionsIcons = styled.ul`
  display: flex;
  gap: 1.5em;
  svg {
    cursor: pointer;
  }
`;

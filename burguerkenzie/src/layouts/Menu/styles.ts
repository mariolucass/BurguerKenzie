import styled from "styled-components";

export const ListMenu = styled.ul`
  margin-top: 1%;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  gap: 1em;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    padding-top: 0;
    background-color: white;
    border-radius: 8px;
    background: linear-gradient(
      180deg,
      var(--color-primary) 50%,
      var(--white) 50%
    );

    :last-child .image {
      margin-top: 10px;
    }
  }
`;

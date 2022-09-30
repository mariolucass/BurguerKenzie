import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --color-primary: #27ae60;
  --color-primary-50: #93d7af;
  --color-secondary: #eb5757;

  --gray-100: #333333;
  --gray-50: #828282;
  --gray-20: #e0e0e0;
  --gray-0: #f5f5f5;
  --gray-button:#BDBDBD;
  --white: #FFFFFF;

  --negative: #e60000;
  --warning: #ffcd07;
  --sucess: #168821;
  --information: #155bcb;
}

*{
    margin:0 ;
    padding:0;
    box-sizing: border-box;
    list-style:none
}

body{
    margin:0;
    padding:0;   
    font-family: 'Inter', sans-serif;
}

button{
    cursor: pointer;
    border: none;
    background:transparent;
}

button, input{
    font-family: 'Inter', sans-serif;
}
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;

  @media (min-width: 768px) {
    margin: 0 115px;
    flex-direction: row;
  }
`;

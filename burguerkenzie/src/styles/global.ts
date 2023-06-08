import { createGlobalStyle } from "styled-components";
import WaveBackground from "../assets/background.svg";

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
  --toastify-font-family: "Inter" sans-serif;
}

*{
    margin:0 ;
    padding:0;
    box-sizing: border-box;
    list-style:none;
    font-family: "Inter", sans-serif;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    background-color: var(--color-primary);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
}

body{
    min-height:100vh;
    height: 100%;
    width: 100%;
    margin:0;
    padding:0;   
    
    background-image: url(${WaveBackground});
    background-repeat: no-repeat;
    background-size: cover;
}

button{
    border: none;
    background:transparent;
    cursor: pointer;
}
`;

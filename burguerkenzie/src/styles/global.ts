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
    list-style:none
}

body{
    min-height:100vh;
    height: 100%;
    width: 100%;
    margin:0;
    padding:0;   
    font-family: 'Inter', sans-serif;
    background-image: url(${WaveBackground});
    background-repeat: no-repeat;
    background-size: cover;

    ::-webkit-scrollbar { 
        display: none; 
    }
 
}

button{
    border: none;
    background:transparent;
    cursor: pointer;
}

button, input{
    font-family: 'Inter', sans-serif;
}
input{
    ::placeholder{
        font-family: 'Inter', sans-serif; 
    }
}
`;
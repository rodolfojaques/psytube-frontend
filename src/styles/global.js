import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
    } 
    
    :root{
        --toastify-color-dark: #1c1c1c;
    }  
     
    h1, h2, h3, h4, h5, h6{
        font-family: 'Sarpanch', sans-serif;

    }
`;

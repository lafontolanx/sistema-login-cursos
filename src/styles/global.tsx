import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f0f2f5;
        font-family: 'Poppins', sans-serif;
        width: 100vw;
        height: 100vh;
    }
`
export default GlobalStyle;

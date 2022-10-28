import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--grey-1);
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 400;
        width: 100vw;
        height: 100vh;
    }

    :root {
        --white: #fff;
        --black: #000;
        --grey-1: #27262C;
        --grey-2: #999999;
        --grey-3: #414044;
        --grey-4: #131212;
        --purple: #4044ED;
    }
`
export default GlobalStyle;

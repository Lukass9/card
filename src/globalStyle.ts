import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    letter-spacing: .1em;
}

*,
::before,
::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
}
`;

export default GlobalStyle;
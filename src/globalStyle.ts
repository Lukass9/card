import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*:after,
*:before,
 body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 11px;
    font-family: 'Rubik', sans-serif;
    letter-spacing: .1em;
}
`;

export default GlobalStyle;
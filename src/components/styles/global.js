import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    background-color: #7159c1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

html, border-style, #root {
    height: 100%;
}

`;
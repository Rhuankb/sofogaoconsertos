import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #fbc84d;
    --color-secundary: #dd0e18;
    --whatsapp: #00b38d;
    --font-color: #282236;
    --gray: #7b7b7b;
    --gray-bg: rgba(240, 240, 240, 1);
}

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button{
    cursor: pointer;
    border: none;
    background: transparent;
}
a{
    color: unset;
    text-decoration: none;
}
ul, ol, li{
    list-style: none;
}
body {
    background-color: white;
    overflow-x: hidden;
}

.App {    height: 100%;
    width: 99vw;   }

h2, h3, h4, p, a, button {
    font-family: "Montserrat";
}

@media (max-width: 450px) {

    
}
`;

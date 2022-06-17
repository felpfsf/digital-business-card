import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.mainBody};
    font-family: 'Inter', sans-serif;
    transition: all 0.5s ease-in;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.footerLinks};
    padding: 0;
  }

  .switcher {
    border: none;
    background: transparent;
    margin-bottom: 10px;
  }
`
import { createGlobalStyle } from 'styled-components';
import './assets/fonts/fonts.css';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root {
    --accent-color: ${({ theme }) => theme.accentColor};
    --accent-bright: ${({ theme }) => theme.accentBright};
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Google Sans Regular', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
`;

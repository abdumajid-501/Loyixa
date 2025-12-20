import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
  }

  body {
    background-color: ${theme.colors.dark.darkBlue};
    color: ${theme.colors.dark.white};
    font-family: "Outfit Variable", "Arial", sans-serif;
    font-weight: 400;
    font-size: .9375rem;
    line-height: 1;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.dark.red};
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  input {
    background-color: transparent;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    color: inherit;       
  }
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const TextM = styled.p`
    font-size: .9375rem;
    line-height: 1;
`
export const TextS = styled.p`
    font-size: .8125rem;
    line-height: 1;
`

export const TitleL = styled.h2`
    font-size: 2rem;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -0,5px;
`;

export const TitleM = styled.h2`
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 400;
`;

export const TitleXS = styled.h2`
    font-size: 1.125rem;
    line-height: 1;
    font-weight: 400;
`;
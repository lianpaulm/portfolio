import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 1px dashed ${({ theme }) => theme.colors.primary};
  outline-offset: 3px;
}

:focus:not(:focus-visible) {
  outline: none;
  outline-offset: 0px;
}

:focus-visible {
  outline: 1px dashed ${({ theme }) => theme.colors.primary};
  outline-offset: 3px;
}

body {
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  background:  #fff;
  line-height: 1.5;
}

ul {
  list-style-type: none;
}  

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

button {
  font-family: ${({ theme }) => theme.fonts.body};
  cursor: pointer;
  display: inline-block;
  background: none;
  border: none;
  line-height: 1;
}

h1,
h2,
h3,
h4 {
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1.25;
}

img,
svg {
  display: block;
  max-width: 100%;
}
`;

export default GlobalStyles;

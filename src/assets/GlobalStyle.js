import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
const Global = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default Global;
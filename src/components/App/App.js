import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';

const GlobalStyles = createGlobalStyle`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  :root {
    --max-page-width: 1300px;
    --viewport-mobile: 40em;
  }

  body {
    background: #fafbfc;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.4;
    margin: 0;
  }

  #root {
    display: grid;
    grid-row-gap: 1.5em;
    grid-template-columns: [full-start] minmax(1em, 1fr) [main-start] minmax(0, var(--max-page-width)) [main-end] minmax(1em, 1fr) [full-end];
    grid-template-rows: max-content 1fr;
    min-height: 100vh;
  }
  
  .page-header {
    grid-column: full;
    grid-row: 1;
  }
  
  .page-content {
    grid-column: main;
  }
`;

const App = () => (
  <>
    <GlobalStyles />
    <Header className="page-header" />
    <main className="page-content">
      <Dashboard />
    </main>
  </>
)

export default App;

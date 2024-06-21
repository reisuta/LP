'use client'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import type { ReactNode } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
+     </body>
    </html>
  );
}

import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Routes } from 'react-router-dom';
import { Theme } from './styles';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Routes>
        <App />
      </Routes>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

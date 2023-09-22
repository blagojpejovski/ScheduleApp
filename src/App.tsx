import React from 'react';
import './App.css';
import Root from './components/Root';
import { styled } from '@mui/material';
import Header from './components/atoms/Header/Header';

const AppContainer = styled("div")`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: ${({ theme }) => `${theme.spacing(10)} ${theme.spacing(3)}`};
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <AppContainer>
      <Root />
    </AppContainer>
  )
}

export default App;

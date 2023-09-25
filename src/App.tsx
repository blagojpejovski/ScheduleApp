import React from "react";
import "./App.css";
import Root from "./components/Root";
import { Box, styled } from "@mui/material";

import BackgroundImage from "./assets/images/business-meeting.png";
import EditButton from "./components/atoms/EditButton/EditButton";

const AppContainer = styled(Box)`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: ${({ theme }) => `${theme.spacing(20)} ${theme.spacing(5)}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing(20)} ${theme.spacing(2)}`};
  }
`;

const HeaderImage = styled(Box)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 300px;
  z-index: -1;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ChangeButtonContainer = styled(Box)`
  position: absolute;
  top: 75px;
  right: ${({ theme }) => theme.spacing(1)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <HeaderImage />
      <ChangeButtonContainer>
        <EditButton>Change program cover</EditButton>
      </ChangeButtonContainer>
      <Root />
    </AppContainer>
  );
}

export default App;

import React from 'react';
import Tiles from './Tiles';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <h1>My Dashboard</h1>
        <Tiles />
      </Container>
    </React.Fragment>
  );
}

export default App;

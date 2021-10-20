import logo from './logo.svg';
import './App.css';
import { Button, Grid, Rating } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import NewsPaper from './Components/NewsPaper/NewsPaper';
import Container from '@mui/material/Container';

function App() {

  return (

    <Container fixed>
      <NewsPaper></NewsPaper>
    </Container>
  );
}

export default App;

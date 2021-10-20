import logo from './logo.svg';
import './App.css';
import { Button, Grid, Rating } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import NewsPaper from './Components/NewsPaper/NewsPaper';

function App() {

  return (
    <div>
      <NewsPaper></NewsPaper>
    </div>
  );
}

export default App;

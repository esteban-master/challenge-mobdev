import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, Grid, Stack, Typography } from '@mui/material';
import './App.css'
import Header from './components/Header';

import { DogContextProvider } from './context/dogContext';
import Home from './pages/Home';

function App() {
  return (
      <DogContextProvider>
        <Header />
        <Container>
          <Home />
        </Container>
      </DogContextProvider>
  )
}

export default App

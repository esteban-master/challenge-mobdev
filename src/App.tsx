import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

import { DogContextProvider } from './context/dogContext';
import Home from './pages/Home';

function App() {
  return (
      <DogContextProvider>
        <Home />
      </DogContextProvider>
  )
}

export default App

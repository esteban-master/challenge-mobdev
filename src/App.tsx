import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Autocomplete, Button, Checkbox, Collapse, FormControl, Grid, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { DogContextProvider, useDogContext } from './context/dogContext';
import { Breeds, BreedsResponse } from './types/api';
import Home from './pages/Home';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <DogContextProvider>
        <Home />
      </DogContextProvider>
    </QueryClientProvider>
  )
}

export default App

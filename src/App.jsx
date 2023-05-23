import { ThemeProvider } from '@emotion/react'
import './App.css'
import PerfumeCard from './PerfumeCard'
import { createTheme} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Fraunces',
      'variable',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PerfumeCard />
      </div>
    </ThemeProvider>
  )
}

export default App

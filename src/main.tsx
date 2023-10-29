import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { PokemonContextProvider } from './Context/PokemonContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </React.StrictMode>
)

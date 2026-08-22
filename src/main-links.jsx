import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Links from './pages/Links.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Links />
  </StrictMode>,
)

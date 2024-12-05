import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RegistrationPage from './Registration.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegistrationPage />
  </StrictMode>,
)

import "@styles/index.css"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoutes } from './routes'
import ErrorProvider from '@/components/providers/ErrorProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorProvider>
      <AppRoutes/>
    </ErrorProvider>
  </StrictMode>,
)

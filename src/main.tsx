import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root') as HTMLElement | null
if (!rootElement) throw new Error('Root element #root not found')

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

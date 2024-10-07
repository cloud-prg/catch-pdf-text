import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppPage from './App.tsx'
import { App } from 'antd'
import './styles/tailwind.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <AppPage />
    </App>
  </StrictMode>,
)

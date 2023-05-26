import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/Routers.jsx'
import AUthProvider from './providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AUthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AUthProvider>
  </React.StrictMode>,
)

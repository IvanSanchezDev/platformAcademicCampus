import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SidebarProvider } from './context/sidebar_context.jsx'
import { AuthProvider } from './context/authContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider> 
    <SidebarProvider>
    <App />
  </SidebarProvider>
   
  </AuthProvider>
  
)

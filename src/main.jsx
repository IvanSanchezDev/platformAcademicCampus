
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SidebarProvider } from './context/sidebar_context.jsx'
import { AuthProvider } from './context/authContext.jsx'
import {UrlProvider} from './context/urlContext.jsx'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider> 
      <UrlProvider>
        <SidebarProvider>    
          <App />         
        </SidebarProvider>
      </UrlProvider>    
    </AuthProvider>
  </BrowserRouter> 
  
)

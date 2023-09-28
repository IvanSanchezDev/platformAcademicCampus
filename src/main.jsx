
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SidebarProvider } from './context/sidebar_context.jsx'
import { AuthProvider } from './context/authContext.jsx'
import {UrlProvider} from './context/urlContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import {InscripcionProvider} from './context/inscripcionContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider> 
      <UrlProvider>
        <InscripcionProvider>
          <SidebarProvider>    
            <App />         
          </SidebarProvider>
        </InscripcionProvider>
      </UrlProvider>    
    </AuthProvider>
  </BrowserRouter> 
  
)

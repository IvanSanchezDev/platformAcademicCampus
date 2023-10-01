
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SidebarProvider } from './context/sidebar_context.jsx'
import { AuthProvider } from './context/authContext.jsx'
import {UrlProvider} from './context/urlContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import {InscripcionProvider} from './context/inscripcionContext.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider> 
      <UrlProvider>
      <QueryClientProvider client={queryClient}>
        <InscripcionProvider>
        <SidebarProvider>    
            <App />         
          </SidebarProvider>
        </InscripcionProvider>
         
        </QueryClientProvider>
      </UrlProvider>    
    </AuthProvider>
  </BrowserRouter> 
  
)

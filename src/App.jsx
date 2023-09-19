import Sidebar from './components/Sidebar'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  

  return (
   <BrowserRouter>
      <Navbar/>
      <Sidebar/>
   </BrowserRouter>
  )
}

export default App

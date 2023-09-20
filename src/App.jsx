import Sidebar from './components/Sidebar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/HomePage'
import "bootstrap/dist/css/bootstrap.css";
import Login from './components/Login'

function App() {
  

  return (
   <BrowserRouter>
      <Navbar/>
      <Sidebar/>
     <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes> 
   </BrowserRouter>
  )
}

export default App

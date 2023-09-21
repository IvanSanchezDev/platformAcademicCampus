
import './App.css'
import {  Routes, Route } from 'react-router-dom'
import Home from './components/HomePage'
import "bootstrap/dist/css/bootstrap.css";
import Login from './components/Login'
import { ProtectedRoute } from './protectedRoutes'
import { Profile } from './components/Profile';
import CoursePage from './components/CoursePage';


function App() {
  

  return (
          <Routes >
            <Route path="/">
              <Route path='login' element={<Login/>}/>
            </Route>
            <Route element={<ProtectedRoute/>}>
              <Route path='/home' element={<Home/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/course' element={<CoursePage/>}/>
            </Route>
          </Routes>
  )
}

export default App

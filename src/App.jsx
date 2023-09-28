
import './App.css'
import {  Routes, Route } from 'react-router-dom'
import Home from './components/HomePage'
import "bootstrap/dist/css/bootstrap.css";
import Login from './components/Login'
import { ProtectedRoute } from './protectedRoutes'
import { Profile } from './components/Profile';
import CoursePage from './components/CoursePage'
import {DetailsCoursePage} from './components/pages/DetailsCoursePage';



function App() {
  

  return (
          <Routes >
            
              <Route path='/login' element={<Login/>}/>
         
            <Route element={<ProtectedRoute/>}>
              <Route path='/home' element={<Home/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path="/course/:nameCourse" element={<CoursePage/>} />
              <Route path='/detailsCourse/:nameCourse' element={<DetailsCoursePage/>}/>
            </Route>
          </Routes>
  )
}

export default App

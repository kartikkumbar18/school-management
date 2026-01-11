import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from '../src/Pages/LandingPage';
import Results from './Pages/Results';
import Login from './Pages/Authentication/Login';
import ForgotPassword from './Pages/Authentication/ForgotPassword';
import StudentInfo from './Pages/Admin/StudentInfo';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/studentInfo' element={<StudentInfo/>}/>

       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

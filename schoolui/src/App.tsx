import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from '../src/Pages/LandingPage';
import Results from './Pages/Results';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import ForgotPassword from './Pages/Authentication/ForgotPassword';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>

       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

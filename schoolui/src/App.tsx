import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from '../src/Pages/LandingPage';
import Results from './Pages/Results';
import Login from './Pages/Authentication/Login';
import ForgotPassword from './Pages/Authentication/ForgotPassword';
import StudentInfo from './Pages/Admin/StudentInfo';
import { About } from './Pages/About';
import { Facilities } from './Pages/Facilities';
import { Contactus } from './Pages/Contactus';
import Chatbot from './Components/Chatbot/Chatbot';
import { ListingUser } from './Pages/Admin/ListingUser';
import { AdminDashboard } from './Pages/Admin/Dashboard/AdminDashboard';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { RoleManagement } from './Pages/Admin/Dashboard/RoleManagement';
import RoleMapping from './Pages/Admin/Dashboard/RoleMapping';

function App() {

  return (
    <>
      <BrowserRouter>
      <Chatbot/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/studentInfo' element={<StudentInfo/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path="/facilities" element={<Facilities/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/ListingUser" element={<ListingUser/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/RoleManagement" element={<RoleManagement/>}/>
        <Route path="/RoleMapping" element={<RoleMapping/>}/>

       
      </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App

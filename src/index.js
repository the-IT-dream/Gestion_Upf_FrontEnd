import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './index.css'
import App from './App';
import Espace_Etudiant from '../src/Pages/View/Home/Js/Espace_Etudiant'
import ResetPassword from './Pages/Auth/Js/ResetPassword';
import ForgotPassword from './Pages/Auth/Js/ForgotPassword';
import Login from './Pages/Auth/Js/Login';
import SideBar from './Components/Mini-Components/Js/Navbar';



ReactDOM.render(
    // <App />,
    <Router>
        <Routes>
            <Route path='/' element={<App />} />      
            <Route path='/Login' element={<Login />} />
            <Route path='/ForgotPassword' element={<ForgotPassword />} />
            <Route path='/ResetPassword' element={<ResetPassword />} />
            <Route path='/Espace_Etudiant' element={<Espace_Etudiant />} />
        </Routes>
    </Router>,
    document.getElementById('root') 
);
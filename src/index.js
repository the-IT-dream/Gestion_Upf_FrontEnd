import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from '../src/App'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './Pages/Auth/Js/Login';
import ForgotPassword from './Pages/Auth/Js/ForgotPassword';
import ResetPassword from './Pages/Auth/Js/ResetPassword';
import Espace_Etudiant from './Pages/View/Home/Js/Espace_Etudiant';
import Account from './Pages/View/Home/Components/pages/js/Account';
import Espace_Admin from './Pages/View/Home/Js/Espace_Admin';
import Details_Stage from './Pages/View/Home/Components/pages/js/Details_Stage';



ReactDOM.render(

    <React.StrictMode>
            <App/>
            {/* <Routes>
               <Route path='/' element={<Login/>} /> 
               <Route path='/Login' element={<Login/>} />
               <Route path='/ForgotPassword' element={<ForgotPassword/>} /> 
               <Route path='/ResetPassword' element={<ResetPassword/>} />   
               <Route path="/Espace_Etudiant" element={<Espace_Etudiant />} />
                 
           </Routes> */}
            {/* <Espace_Etudiant>
                <Routes>
                    <Route path="/Account" element={<Account />} />
                </Routes>
            </Espace_Etudiant> */}
            {/* <Espace_Admin>
                <Routes>
                    <Route path="/Details_Stage" element={<Details_Stage />} />
                </Routes>
            </Espace_Admin> */}
            {/* <App /> */}
            {/* <Espace_Etudiant/> */}

    </React.StrictMode>,
    document.getElementById('root') 
);
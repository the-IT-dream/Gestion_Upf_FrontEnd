import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from '../src/App'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './Pages/Auth/Js/Login';
import ForgotPassword from './Pages/Auth/Js/ForgotPassword';
import ResetPassword from './Pages/Auth/Js/ResetPassword';
import Espace_Etudiant from './Pages/View/Home/Js/Espace_Etudiant';
import Account from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Account';
import Espace_Admin from './Pages/View/Home/Js/Espace_R_Stage';
import Details_Stage from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Details_Stage';



ReactDOM.render(

    <React.StrictMode>
            <App/>
    </React.StrictMode>,
    document.getElementById('root') 
);
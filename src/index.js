import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './index.css'
import App from './App';
import Espace_Etudiant from '../src/Pages/View/Home/Js/Espace_Etudiant'


ReactDOM.render(
    // <App />,
    <Router>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/Espace_Etudiant' element={<Espace_Etudiant />} />
        </Routes>
    </Router>,
    document.getElementById('root') 
);
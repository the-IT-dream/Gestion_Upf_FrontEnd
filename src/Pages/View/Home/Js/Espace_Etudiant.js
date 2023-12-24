import React from 'react'

import '../Css/Espace_Etudiant.css';
import Sidebar from '../../../../Components/Mini-Components/SideBar/components/Sidebar'
import Dashboard from '../../../../Components/Mini-Components/SideBar/pages/Dashboard'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import '../Css/Espace_Etudiant.css';
import Account from '../Components/js/Account';



const Espace_Etudiant = () => {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} /> */}
        </Routes>
      </Sidebar>
    </Router>
  );
};

export default Espace_Etudiant

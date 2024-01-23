import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar_SuperViser from '../../../../../../../Components/Mini-Components/SideBar/components/SideBar_SuperViser';
import TopBar_SuperViser from '../../../../../../../Components/Components/Js/TopBar_SuperViser';
import { useAuth } from '../../../../../../../AuthContext';

function InternshipDetailsSupervisor() {
  const [internshipDetailsList, setInternshipDetailsList] = useState([]);
  const { authData } = useAuth();
  const accessToken = authData.access_token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/upf/supervisors/internship', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setInternshipDetailsList(response.data);
      } catch (error) {
        console.error(error);
        // Handle error, e.g., redirect to login page
      }
    };

    fetchData();
  }, [accessToken]);

  return (
    <div>
      <Sidebar_SuperViser />
      <div className='content'>
        <div className='content__topbar'>
          <TopBar_SuperViser />
        </div>
        <div className='content__menu'>
          <main>
            <div className='table__container'>
              <div className='table__header'>
                <div>
                  <p>Liste des details de stage</p>
                </div>
              </div>
              <table className='StudentList__table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Entreprise</th>
                    <th>Date début de stage</th>
                    <th>Date fin de stage</th>
                    <th>Durée</th>
                    <th>Ville</th>
                    <th>Pays</th>
                    <th>Nom de l'étudiant</th>
                    <th>Créé le</th>
                    <th>Date de soutenance</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {internshipDetailsList.map((detail) => (
                    <tr key={detail.id}>
                      <td>{detail.id}</td>
                      <td>{detail.company}</td>
                      <td>{detail.startDate}</td>
                      <td>{detail.endDate}</td>
                      <td>{detail.duration}</td>
                      <td>{detail.city}</td>
                      <td>{detail.country}</td>
                      <td>{detail.studentName}</td>
                      <td>{detail.createdAt}</td>
                      <td>{detail.defenseDate}</td>
                      <td>
                        <Link to={`/Espace_SuperViser/modify-defense-date/${detail.id}`}>
                          <button className='btn--save--style btn--save--size'>Modify</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default InternshipDetailsSupervisor;

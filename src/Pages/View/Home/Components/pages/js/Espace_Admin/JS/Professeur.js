import React, { useState, useEffect } from 'react';
import '../CSS/StudentList.css';
import { Button } from '../../../../../../../../Components/Mini-Components/Js/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar_admin from '../../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_admin';
import TopBar_admin from '../../../../../../../../Components/Components/Js/TopBar_admin';
import { useAuth } from '../../../../../../../../AuthContext.js';

function SupervisorList() {
  const [internshipManagers, setInternshipManagers] = useState([]);
  const { authData } = useAuth();
  const accessToken = authData.access_token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/upf/employees/supervisor', {
          headers: {
              'Authorization': `Bearer ${accessToken}`,
          },
      });

        setInternshipManagers(response.data);
      } catch (error) {
        console.error('Error fetching isupervisors:', error);
      }
    };

    fetchData();
  }, [accessToken]);

  const handleDeleteManager = async (managerId) => {
    try {
      await axios.delete(`http://localhost:5555/upf/employees/${managerId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      // Update the state to reflect the deletion
      setInternshipManagers((prevManagers) => prevManagers.filter((manager) => manager.id !== managerId));

      console.log('Manager deleted successfully:', managerId);
    } catch (error) {
      console.error('Error deleting manager:', error);
      // Handle errors, show a message, etc.
    }
  };

  return (
    <div>
      <Sidebar_admin />
      <div className='content'>
        <div className='content__topbar'>
          <TopBar_admin />
        </div>
        <div className='content__menu'>
          <main>
            <div className='table__container'>
              <div className='table__header'>
                <div>
                  <p>Liste des Responsable de stage</p>
                </div>
                <div>
                  <Button
                    buttonStyle={'btn--detail--style'}
                    buttonSize={'btn--detail--size'}
                    children={'Ajouter'}
                    buttonPath={'/Espace_admin/Ajouter_Encadrant'}
                    className='button__detail'
                  />
                </div>
              </div>
              <table className='StudentList__table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>Cin</th>
                    <th>Grade</th>
                    <th>Departement</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {internshipManagers.map((internshipManager) => (
                    <tr key={internshipManager.id}>
                      <td>{internshipManager.id}</td>
                      <td>{internshipManager.firstName}</td>
                      <td>{internshipManager.lastName}</td>
                      <td>{internshipManager.mail}</td>
                      <td>{internshipManager.cin}</td>
                      <td>{internshipManager.grade}</td>
                      <td>{internshipManager.departement}</td>
                      <td className='butt__td'>
                        <Link to={`/Espace_Admin/ModifierRS/${internshipManager.id}`}>
                          <button className='button__modify'>Modifier</button>
                        </Link>
                        <button onClick={() => handleDeleteManager(internshipManager.id)} className='button__delete'>Supprimer</button>
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

export default SupervisorList;

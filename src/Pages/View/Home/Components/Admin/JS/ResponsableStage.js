import React, { useState, useEffect } from 'react';
import '../CSS/StudentList.css';
import { Button } from '../../../../../../Components/Mini-Components/Js/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../../../../../AuthContext.js';

function ResponsableStage() {
  const [responsables, setResponsables] = useState([]);
  const { authData } = useAuth();
  const accessToken = authData.access_token;

  useEffect(() => {
    const fetchResponsables = async () => {
      try {
        const response = await axios.get('http://localhost:5555/upf/employees/internship_manager', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        setResponsables(response.data);
      } catch (error) {
        console.error('Error fetching responsible data:', error);
      }
    };

    fetchResponsables();
  }, []);

  return (
    <div>
      <div className='table__container'>
        <div className='table__header'>
          <div>
            <p>Liste des Responsables de stage</p>
          </div>
          <div>
            <Button
              buttonStyle={'btn--detail--style'}
              buttonSize={'btn--detail--size'}
              children={'Ajouter'}
              buttonPath={'/AjoutRS'}
              className='button__detail'
            />
          </div>
        </div>
        <table className='internship_managerList__table'>
          <thead>
            <tr>
              <th></th>
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
            {responsables.map((responsable) => (
              <tr key={responsable.id}>
                <td></td>
                <td>{responsable.firstName}</td>
                <td>{responsable.lastName}</td>
                <td>{responsable.mail}</td>
                <td>{responsable.cin}</td>
                <td>{responsable.grade}</td>
                <td>{responsable.departement}</td>
                <td className='butt__td'>
                  <Link to="/ModifierRS">
                    <button className='button__modify'>Modifier</button>
                  </Link>
                  <button className='button__delete'>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResponsableStage;

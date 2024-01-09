import React, { useEffect, useState } from 'react';
import '../CSS/StudentList.css';
import { Button } from '../../../../../../Components/Mini-Components/Js/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../../../../../AuthContext.js';

function StudentList() {
  const [students, setStudents] = useState([]);
  const { authData } = useAuth();
  const accessToken = authData.access_token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/upf/students', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchData();
  }, [accessToken]);

  const handleDeleteStudent = async (studentId) => {
    try {
      await axios.delete(`http://localhost:5555/upf/students/${studentId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      console.log('Student deleted successfully:', studentId);
      // Mettez à jour l'état pour refléter la suppression
      setStudents((prevStudents) => prevStudents.filter((student) => student.id !== studentId));
    } catch (error) {
      console.error('Error deleting student:', error);
      // Ajoutez ici la logique pour gérer les erreurs, par exemple, afficher un message d'erreur
    }
  };

  return (
    <div>
      <div className='table__container'>
        <div className='table__header'>
          <div>
            <p>Liste des étudiants</p>
          </div>
          <div>
            <Button
              buttonStyle={'btn--detail--style'}
              buttonSize={'btn--detail--size'}
              children={'Ajouter'}
              buttonPath={'/AjoutEtudiant'}
              className='button__detail'
            />
          </div>
        </div>
        <table className='StudentList__table'>
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>CNE</th>
              <th>CIN</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Filière</th>
              <th>Niveau</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
                  {/* Ajoutez ici le code pour afficher l'avatar */}
                </td>
                <td>{student.id}</td>
                <td>{student.cin}</td>
                <td>{student.cne}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.mail}</td>
                <td>{student.major}</td>
                <td>{student.level}</td>
                <td className='butt__td'>
                  <Link to={`/ModifierEtudiant/${student.id}`}>
                    <button className='button__modify'>Modifier</button>
                  </Link>
                  <button onClick={() => handleDeleteStudent(student.id)} className='button__delete'>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;

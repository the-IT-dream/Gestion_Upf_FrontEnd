// StudentList.js

import React from 'react';
import '../CSS/StudentList.css';
import { Button } from '../../../../../../Components/Mini-Components/Js/Button';
import { Link } from 'react-router-dom';

const students = [
  { id: 1, name: 'John Doe', avatar: './images/avatar/1.png' },
  { id: 2, name: 'Jane Doe', avatar: './images/avatar/1.png' },
];

function StudentList() {
  return (
    <div>
    <div className='table__container'>
        <div className='table__header'>
            <div>
            <p>Liste des etudiant</p>
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
            <th>CNE</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Filiere</th>
            <th>Niveau</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
            <td>
                <img src={student.avatar} alt={`Avatar of ${student.name}`} className='StudentList__avatar' />
              </td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.name}</td>
              <td>{student.name}</td>
              <td>{student.name}</td>
              <td>{student.name}</td>
              <td className='butt__td'>
                <Link to="/ModifierEtudiant">
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

export default StudentList;

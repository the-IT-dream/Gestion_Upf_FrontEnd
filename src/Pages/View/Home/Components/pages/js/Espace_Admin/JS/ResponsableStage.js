
import React from 'react';
import '../CSS/StudentList.css';
import { Button } from '../../../../../../../../Components/Mini-Components/Js/Button';
import { Link } from 'react-router-dom';
import Sidebar_admin from '../../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_admin';
import TopBar_admin from '../../../../../../../../Components/Components/Js/TopBar_admin';

const students = [
  { id: 1, name: 'John Doe', avatar: './images/avatar/1.png' },
  { id: 2, name: 'Jane Doe', avatar: './images/avatar/1.png' },
];
function ResponsableStage() {
    return (
        <div>
          <Sidebar_admin/>
          <div className='content'>
            <div className='content__topbar'>
              <TopBar_admin  />     
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
                          buttonPath={'/Espace_admin/Ajouter_Rs'}
                          className='button__detail'
                      />
                      </div>
                  </div>
                <table className='StudentList__table'>
                  <thead>
                    <tr>
                    <th></th>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>Email</th>
                      <th>Cin</th>
                      <th>grade</th>
                      <th>Departement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id}>
                      <td>
                          <img src={student.avatar} alt={`Avatar of ${student.name}`} className='StudentList__avatar' />
                        </td>
                        <td>{student.name}</td>
                        <td>{student.name}</td>
                        <td>{student.name}</td>
                        <td>{student.name}</td>
                        <td>{student.name}</td>
                        <td>{student.name}</td>
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
              </main>
            </div>
          </div>
        
        </div>
      );
}

export default ResponsableStage

import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useAuth } from '../../../../../../../AuthContext';
import TopBar_SuperViser from '../../../../../../../Components/Components/Js/TopBar_SuperViser';
import Sidebar_SuperViser from '../../../../../../../Components/Mini-Components/SideBar/components/SideBar_SuperViser';
function GetStudentList(){
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
  
        <Sidebar_SuperViser />
        <div className='content'>
          <div className='content__topbar'>
            <TopBar_SuperViser  />
            
          </div>
          <div className='content__menu'>
            <main> 
            <div className='table__container'>
          <div className='table__header'>
            <div>
              <p>Liste des étudiants</p>
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
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>
                    {/* Ajoutez ici le code pour afficher l'avatar */}
                  </td>
                  <td>{student.id}</td>
                  <td>{student.cne}</td>
                  <td>{student.cin}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.mail}</td>
                  <td>{student.major}</td>
                  <td>{student.level}</td>
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
  
  export default GetStudentList;
  
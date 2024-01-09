import React from 'react';
import '../CSS/Roles.css';
import RolesCard from '../../../../../../../../Components/Global/Top-Bar/js/RolesCard'
import { Link } from 'react-router-dom';
import Sidebar_admin from '../../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_admin';
import TopBar_admin from '../../../../../../../../Components/Components/Js/TopBar_admin';

function Roles() {
  return (
    <div>
    <Sidebar_admin />
    <div className='content'>
        <div className='content__topbar'>
          <TopBar_admin  />    
        </div>
        <div className='content__menu'>
          <main> 
            <div className='roles__container'>
                <div className='RolesCards__wrap'>
                    <Link className='Link__style' to="/StudentList">
                        <RolesCard 
                            nombres="Total 4 etudiant"
                            rolesname="Etudiants"
                        />
                    </Link>
                    <Link className='Link__style' to="/ResponsableStage">
                    <RolesCard 
                            nombres="Total 5 Admin"
                            rolesname="Responsable de stage"
                        />
                        </Link>
                    <Link className='Link__style' to="/Professeur">
                        <RolesCard 
                                nombres="Total 4 Professeur"
                                rolesname="Professeur"
                            />
                    </Link>

                </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Roles

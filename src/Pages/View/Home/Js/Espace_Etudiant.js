import React from 'react'
import '../Css/Espace_Etudiant.css';
import Menu from '../../../../Components/Mini-Components/Js/Menu'
import TopBar from '../../../../Components/Components/Js/TopBar'

function Espace_Etudiant() {
  return (
    <div>
      <div className='espace__etudiant__container'>
        <div className='menu'>
          <Menu/>
        </div>
        <div className='content'>
          <div>
          <TopBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Espace_Etudiant

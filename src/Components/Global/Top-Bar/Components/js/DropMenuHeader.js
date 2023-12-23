import React from 'react';
import ProfileIcon from '../../js/ProfileIcon';
import '../css/DropMenuHeader.css';

function DropMenuHeader() {
  return (
    <div>
       <div className='title__drop__container'>
            <ProfileIcon 
               ProfileIconImg='../images/avatar/1.png'
            />
            <div>
            <h3>ayoub </h3>
            </div>

       </div>
    </div>
  )
}

export default DropMenuHeader

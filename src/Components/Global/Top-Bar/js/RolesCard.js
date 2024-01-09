// RolesCard.js

import React from 'react';
import '../css/RolesCard.css';

function RolesCard(props) {
  return (
    <div className='RolesCard__container'>
      <div className='RolesCard__cadre'>
        <div className='RolesCard__header'>
          <div>
            <p>{props.nombres} </p>
          </div>
          <div className='RolesCard__img'>
            <img src="./images/avatar/1.png" alt="Avatar 1" />
            <img src="./images/avatar/1.png" alt="Avatar 2" />
            <img src="./images/avatar/1.png" alt="Avatar 3" />
            <img src="./images/avatar/1.png" alt="Avatar 4" />
          </div>
        </div>
        <div className='RolesCard__body'>
          <h2>{props.rolesname} </h2>
          <div className="arrow-icon">
            <p>Liste</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RolesCard;

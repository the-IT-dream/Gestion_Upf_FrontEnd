// StudentCard.js

import React from 'react';
import '../CSS/StudentCard.css';

function StudentCard({ student }) {
  return (
    <div className='StudentCard__container'>
      <div className='StudentCard__cadre'>
        <div className='StudentCard__header'>
          <div>
            <p>{`Student ID: ${student.id}`}</p>
          </div>
          <div className='StudentCard__img'>
            <img src={student.avatar} alt={`Avatar of ${student.name}`} />
          </div>
        </div>
        <div className='StudentCard__body'>
          <h2>{student.name}</h2>
          <div className='StudentCard__buttons'>
            <button className='button__modify'>Modifier</button>
            <button className='button__delete'>Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;

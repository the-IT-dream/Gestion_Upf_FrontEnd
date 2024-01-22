import React from 'react';
import '../../Components/Css/InfosCard.css';
import { Button } from '../../Mini-Components/Js/Button';

function InfosCard(props) {
  return (
    <div className='card__infos'>
      <div className='card__header'>
        <img src={props.imgEntreprise} />
        <h1>{props.nomEntreprise} </h1>
      </div>
      <div className='card__content'>
        
        <p>{props.detailStage}</p>
      </div>

      <div className='card__footer'>

      </div>
      
    </div>
  )
}

export default InfosCard

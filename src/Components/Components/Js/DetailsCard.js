import React from 'react';
import '../Css/DetailsCard.css';
import '../Css/InfosCard.css';
import { Button } from '../../Mini-Components/Js/Button';

function DetailsCard(props) {
  return (
    <div className='card__infos__det'>
      <div className='card__header__det'>
        <img src={props.imgEntreprise} />
        <h1>{props.nomEntreprise} </h1>
      </div>
      <div className='card__content__det'>
        <h2>{props.lieuEntreprise}</h2>
        <p >{props.detailStage}</p>
      </div>
    </div>
  )
}

export default DetailsCard

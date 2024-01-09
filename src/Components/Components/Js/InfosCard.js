<<<<<<< HEAD
=======
import React from 'react';
import '../Css/InfosCard.css';
import { Button } from '../../Mini-Components/Js/Button';

function InfosCard(props) {
  return (
    <div className='card__infos'>
      <div className='card__header'>
        <img src={props.imgEntreprise} />
        <h1>{props.nomEntreprise} </h1>
      </div>
      <div className='card__content'>
        <h2>{props.lieuEntreprise}</h2>
        <p>{props.detailStage}</p>
      </div>
      <div className='card__footer'>
      <Button
        buttonStyle={'btn--detail--style'} 
        buttonSize={'btn--detail--size'}
        children={'Détails'} 
        buttonPath={'/DetailsInfo'}
        className='button__detail'
      />
      </div>
    </div>
  )
}

export default InfosCard
>>>>>>> 207fb7a6cabda8c259787bce9a3bf1d2421036fd

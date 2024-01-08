import React from 'react';
import '../Css/Details.css';

function Details(props) {
  return (
    <div className='card__infos__detail'>
        <div className='card__header__detail'>
        <img src={props.imgEntreprise} />
        <h1>{props.nomEntreprise} </h1>
        </div>
        <div className='card__content__detail'>
        <h2>{props.lieuEntreprise}</h2>
        <p className='desc__stage'>{props.detailStage}</p>
        </div>
  </div>
  )
}

export default Details

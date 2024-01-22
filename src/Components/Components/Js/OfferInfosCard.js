import React from 'react';
import '../../Components/Css/InfosCard.css';

function OfferInfosCard(props) {
  return (
    <div className='card__infos'>
      <div className='card__header'>
      <img src={props.imgEntreprise} />
        <h1>{props.nomEntreprise} </h1>       
      </div>
      <div className='card__content'>      
      <p>{props.titre}</p>
        <h2><i class="fa-solid fa-location-dot"></i>&nbsp;{props.lieuEntreprise}</h2>
        
        <p>{props.detailStage}</p>
      </div>
      <div className='card__footer'> 
         
      </div>
    </div>
  )
}

export default OfferInfosCard;

import React from 'react';
import '../Css/Details.css';
import CapgeminiImage from '../../../images/Entreprise/Capgemini.png';
import OracleImage from '../../../images/Entreprise/Oracle.png';
import CgiImage from  '../../../images/Entreprise/CGI.png';
import AtosImage from '../../../images/Entreprise/Atos.png';
import IbmImage from '../../../images/Entreprise/ibm.jpg';

function OfferDetails(props) {
  return (
    <div className='card__infos__detail'>
        <div className='card__header__detail'>
        <img src={props.nomEntreprise === 'Capgemini' ? CapgeminiImage :props.nomEntreprise === 'CGI' ? CgiImage :props.nomEntreprise === 'Atos' ? AtosImage : props.nomEntreprise === 'IBM' ? IbmImage : OracleImage} alt={props.nomEntreprise} />

        <h1>{props.nomEntreprise} </h1>
        </div>
        <div className='card__content__detail'>
        <h2>{props.lieuEntreprise}</h2>
        <p><b> Duré par semaine: </b>{props.durationPerWeek}</p>
        <p><b>Dernier delais pour postuler: </b>{props.deadLine}</p>
        <p><b>Date de commencement: </b>{props.startDate}</p>
        <p className='desc__stage'><b>Description: </b>{props.detailStage}</p>
        </div>
  </div>
  )
}

export default OfferDetails
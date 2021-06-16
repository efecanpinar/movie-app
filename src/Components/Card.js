import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import noImage from '../utils/no-image-available.png';
import '../styles/Card.css';

import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Card = ({ image, title, year, addFavorite, isFavorite }) => {
  return (
    <div className='card'>
      <div className='icon' onClick={addFavorite}>
        {isFavorite ? (
          <i>
            <FontAwesomeIcon icon={faStarSolid} color='##FFF700' size='2x' />
          </i>
        ) : (
          <i>
            <FontAwesomeIcon icon={faStarRegular} color='##FFF700' size='2x' />
          </i>
        )}
      </div>
      {image === 'N/A' ? (
        <img src={noImage} alt={title} />
      ) : (
        <img src={image} alt={title} />
      )}

      <div className='info'>
        <span className='title'>{title}</span>
        <span className='year'>{year}</span>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const PlanetInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, data } = state;
  const { climate, diameter, population } = data;

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <FontAwesomeIcon icon={faXmark} onClick={handleGoBack} />
      <h1>{name}</h1>
      <p>{climate}</p>
      <p>{diameter}</p>
      <p>{population}</p>
    </div>
  );
};

export default PlanetInfo;

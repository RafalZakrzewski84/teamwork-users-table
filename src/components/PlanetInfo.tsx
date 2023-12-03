import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import styles from './PlanetInfoStyles';
import filePaths from '../assets/index';

const useStyles = createUseStyles(styles);

interface PlanetData {
  climate: keyof typeof filePaths;
  diameter: string;
  population: string;
}

const PlanetInfo = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { state } = useLocation();
  const { userName, name, data } = state;
  const { climate, diameter, population } = data as PlanetData;
  const handleGoBack = () => {
    navigate('/');
  };

  const imageUrl = filePaths[climate]
    ? filePaths[climate]
    : filePaths.temperate;

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.content}>
          <FontAwesomeIcon
            className={classes.goBack}
            icon={faXmark}
            onClick={handleGoBack}
          />
          <div className={classes.title}>
            <h1>{userName}</h1>
            <p>home planet info:</p>
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.image}>
              {isLoading && <div>Loading image...</div>}
              <img
                src={imageUrl}
                alt="planet"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                onLoad={handleImageLoad}
              />
            </div>
            <div className={classes.info}>
              <p>Name:</p>
              <h1>{name.toUpperCase()}</h1>
              <p>Climate:</p>
              <h1>{climate.toUpperCase()}</h1>
              <p>Diameter:</p>
              <h1>{diameter}</h1>
              <p>Population:</p>
              <h1>{population}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfo;

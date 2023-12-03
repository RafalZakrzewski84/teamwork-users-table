import React from 'react';
import { createUseStyles } from 'react-jss';

import styles from './ButtonStyles';

interface ButtonProps {
  label: string;
  apiUrl: string | null;
  disabled: boolean;
  handleFetchUsers: (url: string) => void;
}

const useStyles = createUseStyles(styles);

const Button = ({ label, apiUrl, disabled, handleFetchUsers }: ButtonProps) => {
  const classes = useStyles();

  const handleClick = (apiUrl: string | null) => {
    if (!apiUrl) return;
    handleFetchUsers(apiUrl);
  };

  return (
    <button
      className={classes.button}
      disabled={disabled}
      onClick={() => handleClick(apiUrl)}
    >
      {label}
    </button>
  );
};

export default Button;

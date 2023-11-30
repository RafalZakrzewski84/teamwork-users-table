import React from 'react';

interface ButtonProps {
  label: string;
  apiUrl: string | null;
  disabled: boolean;
  handleFetchUsers: (url: string) => void;
}

const Button = ({ label, apiUrl, disabled, handleFetchUsers }: ButtonProps) => {
  const handleClick = (apiUrl: string | null) => {
    if (!apiUrl) return;
    handleFetchUsers(apiUrl);
  };

  return (
    <button disabled={disabled} onClick={() => handleClick(apiUrl)}>
      {label}
    </button>
  );
};

export default Button;

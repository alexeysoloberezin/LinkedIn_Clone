import React from 'react';

type ButtonIconProps = {
  onClick?: () => void; // The function to call when the button is clicked
};

const ButtonIcon: React.FC<ButtonIconProps> = ({ children, onClick, size = '50' }) => {
  const styles = {
    width: size + 'px',
    height: size + 'px',
  }

  return (
    <button
      onClick={onClick}
      style={styles}
      className="flex items-center justify-center  bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
    >
      {children}
    </button>
  );
};

export default ButtonIcon;

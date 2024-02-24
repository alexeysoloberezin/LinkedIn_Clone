import React from 'react';

type ButtonIconProps = {
  icon: React.ReactNode; // The icon to display inside the button
  onClick?: () => void; // The function to call when the button is clicked
};

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;

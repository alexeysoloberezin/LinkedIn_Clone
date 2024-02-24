import React from 'react';
import clsx from 'clsx';

type BtnActionProps = {
  label: string;
  Icon: React.ReactNode; // Assuming you have SVGs or components for your icons
  onClick: () => void;
};

const BtnAction: React.FC<BtnActionProps> = ({label, Icon, onClick, width}) => {
  const styles = {
    width: width || 'fit-content',
  }

  return (
    <button
      onClick={onClick}
      style={styles}
      className="group flex items-center space-x-1.5 p-2 px-3 rounded-md hover:bg-gray-100  duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
    >
      <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-200">{Icon}</div>
      <div className="text-gray-700 font-medium group-hover:text-black  duration-200 transition-colors">{label}</div>
    </button>
  );
};

export default BtnAction;

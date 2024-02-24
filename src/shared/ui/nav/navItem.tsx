import React from 'react';
import {NavItemProps} from "./navTypes";

function NavItem({ icon, label, notifications}: NavItemProps = {}) {
  return (
    <div className='relative flex flex-col items-center w-fit cursor-pointer opacity-75 hover:opacity-100 hover:bg-gray-100 transition-opacity duration-300 ease-in-out p-2'>
      {notifications ? (
        <span className='absolute top-2 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
          {notifications}
        </span>
      ) : ''}
      <img src={`/public/icons/${icon}.svg`} alt={icon} />
      <div className='text-xs'>{label}</div>
    </div>
  );
}

export default NavItem;
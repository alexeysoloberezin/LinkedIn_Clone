import React from 'react';

function JobIcon({ size = 24, fill = '#444' }) {
  return (
    <svg width={size} height={size} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" focusable="false">
      <circle cx="12" cy="4" r="2"  opacity=".75"></circle>
      <path d="M21 10H3a1 1 0 00-1 1v10a1 1 0 001 1h18a1 1 0 001-1V11a1 1 0 00-1-1zm-5 9H8v-2h8v2zm2-4H6v-2h12v2z"></path>
      <g opacity=".6">
        <path d="M9.57 5.75l-2.41 4.83 1.68.84 2.28-4.57a3 3 0 01-1.55-1.1zM14.43 5.75a3 3 0 01-1.55 1.1l2.28 4.57 1.68-.84z"  opacity=".55"></path>
      </g>
    </svg>
  );
}

export default JobIcon;
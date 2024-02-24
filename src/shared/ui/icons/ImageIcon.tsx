import React from 'react';

function ImageIcon({ size = 24, fill = '#000' }) {
  return (
    <svg  width={size} height={size} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>image-outline</title><path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" /></svg>
  );
}

export default ImageIcon;
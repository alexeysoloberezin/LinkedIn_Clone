import React from 'react';

function AddIcon({ size = 24, fill = '#000' }) {
  return (
    <svg width={size} height={size} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
  );
}

export default AddIcon;
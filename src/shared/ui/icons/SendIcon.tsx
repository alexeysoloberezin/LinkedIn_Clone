import React from 'react';

function SendIcon({ size = 24, fill = '#000' }) {
  return (
    <svg width={size} height={size} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>send</title><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /></svg>
  );
}

export default SendIcon;
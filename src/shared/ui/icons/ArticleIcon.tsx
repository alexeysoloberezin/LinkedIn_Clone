import React from 'react';

function ArticleIcon({ size = 24, fill = '#000' }) {
  return (
    <svg width={size} height={size} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>post-outline</title><path d="M19 5V19H5V5H19M21 3H3V21H21V3M17 17H7V16H17V17M17 15H7V14H17V15M17 12H7V7H17V12Z" /></svg>
  );
}

export default ArticleIcon;
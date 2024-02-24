import React from 'react';
import Avatar from "./avatar";

const AvatarList = ({items, size}) => {
  const styles = (index) => ({
    margin: `0 0 0 -${size / 5}px`,
    zIndex: index + 1,
  })



  return (
    <div className={'flex'}>
      {items.map((item, index) => (
        <div style={styles(index)} className={`w-fit relative z-${index + 1}`}>
          <Avatar src={item.src} size={size || '28'} classes={'border-2'} key={index} />
        </div>
      ))}
    </div>
  );
};

export default AvatarList;
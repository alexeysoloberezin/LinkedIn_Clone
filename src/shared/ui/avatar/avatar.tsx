import React from 'react';

type AvatarProps = {
  src: string;
  alt?: string;
  size?: string;
  classes?: string;
  status?: UserStatus;
};

type UserStatus = 'HRing' | 'OpenToWork';

const statusImgs = {
  HRing: '/public/avatar/HRing.png',
  OpenToWork: '/public/avatar/HRing.png',
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar', size = '48', status, classes }) => {
  const variants: Record<string, string> = {
    'base' : '48',
    'md': '72',
    'lg': '128',
  }

  if(variants[size]) size = variants[size];

  const sizeClass = {
    width: size + 'px',
    height: size + 'px',
  };

  return (
    <div style={sizeClass} className={`inline-block relative overflow-hidden rounded-full  ${classes || ''}`}>
      <img src={src} alt={alt} className={`object-cover w-full h-full`} />
      {status && <img src={statusImgs[status]} alt={status} className={`absolute bottom-0 right-0`} />}
    </div>
  );
};

export default Avatar;

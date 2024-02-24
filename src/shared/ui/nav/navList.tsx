import React from 'react';
import NavItem from "./navItem";
import {NavItemProps, NavListProps} from "./navTypes";
import {navDefault} from "./navDefault";


function NavList({items, notifications}: NavListProps) {
  const nav: NavItemProps[] = items || navDefault;

  return (
    <div className={'flex gap-3'}>
      {nav.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            notifications={item.icon === 'notify' ? notifications : null}
            label={item.label}
          />
        )
      )}
    </div>
  );
}

export default NavList;
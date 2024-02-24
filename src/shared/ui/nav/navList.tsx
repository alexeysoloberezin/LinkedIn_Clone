import React from 'react';
import NavItem from "./navItem";
import {NavItemProps, NavListProps} from "./navTypes";
import {navDefault} from "./navDefault";


function NavList({items, notifications}: NavListProps) {
  const nav: NavItemProps[] = items || navDefault;

  return (
    <div className={'flex '}>
      {nav.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon || 'home'}
            notifications={item.icon === 'notify' ? notifications : null}
            label={item.label}
          />
        )
      )}
    </div>
  );
}

export default NavList;
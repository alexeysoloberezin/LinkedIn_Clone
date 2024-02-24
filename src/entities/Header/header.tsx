import React from 'react';
import Logo from "@/shared/ui/icons/Logo";
import Search from "@/shared/ui/search/search";
import NavList from "@/shared/ui/nav/navList";
import NavProfile from "@/entities/NavProfile/navProfile";
import NavItem from "@/shared/ui/nav/navItem";
import JobIcon from "@/shared/ui/icons/JobIcon";

function Header(props) {
  return (
    <div className={'border-b bg-white'}>
      <div className={'flex items-center container mx-auto space-x-2 '}>
        <Logo />
        <Search value={''} onChange={() => {}} />
        <div className={'ml-auto flex justify-end w-full'}>
          <NavList />
        </div>
        <NavProfile />

        <div className={'border-l pl-2'}>
          <NavItem
            label={'Post a job for free'}
          >
            <JobIcon />
          </NavItem>
        </div>
      </div>
    </div>

  );
}

export default Header;
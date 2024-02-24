import React from 'react';
import Logo from "@/shared/ui/icons/Logo";
import Search from "@/shared/ui/search/search";
import NavList from "@/shared/ui/nav/navList";
import NavProfile from "@/entities/NavProfile/navProfile";

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
      </div>
    </div>

  );
}

export default Header;
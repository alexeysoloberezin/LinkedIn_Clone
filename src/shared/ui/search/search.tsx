import React from 'react';
import SearchIcon from "../icons/SearchIcon";

type SearchProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

function Search({ value, onChange, placeholder = 'Search'  }: SearchProps ) {
  const styles = {
    padding: '',
    height: '34px'
  }

  return (
    <div className={'relative '} >
      <div className={'absolute top-2 inset-x-1 z-2 w-5 h-5'} style={{left: '10px'}}><SearchIcon /></div>
      <input type="text" value={value} onChange={onChange} style={styles} className={"bg-gray-200  rounded-md pl-9 focus:pl-10 duration-300"} placeholder={placeholder}/>
    </div>
  );
}

export default Search;
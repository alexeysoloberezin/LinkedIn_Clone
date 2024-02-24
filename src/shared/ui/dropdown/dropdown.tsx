import React, {useState} from 'react';

type DropdownProps = {
  toggle: React.ReactNode;
  children: React.ReactNode;
  width?: string;
}

function Dropdown({ toggle, children, width }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    width: width || 'fit-content'
  }

  return (
    <div className="relative">
      <div
        className="dropdown-toggle cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {toggle}
      </div>

      <div
        style={styles}
        className={`dropdown-box absolute right-0 bg-white w-full mt-1 rounded-md shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-auto' : 'max-h-0'}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
import React, { useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Menu as='div' className="dropdown relative">
      <Menu.Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className='dropdown-button w-full text-left flex '
      >
        <RiMapPinLine className='dropdown-icon-primary' />
        <div className=' text-[15px] leading-tight'>
          {country}
          <div>
            <p className='text-[12px]'>Select Your Place</p>
            </div>
        </div>

            {isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-secondary' />
              ) : (
                <RiArrowDownSLine className='dropdown-icon-secondary' />
                )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {
          countries.map((country, index) => {
          return (
            <Menu.Item
            onClick={() => {
              setCountry(country);
              setIsOpen(false);
            }}
            className='cursor-pointer hover:text-violet-700 transition'
            as='li'
            key={index}
          >
            {country}
          </Menu.Item>
          )

})}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;

import React from 'react';
import {BiBed ,BiBath,BiArea} from 'react-icons/bi' ;
const House = ({house}) => {
    const {image, type , country , address , bedrooms,bathrooms,surface,price} = house;
  return <div>

    <div className='bg-white shadow-1 rounded-lg rounded-br-[90px] rounded-tl-[90px] p-5 mb-10 w-full max-w-[352px] cursor-pointer hover:shadow-2xl mx-auto transition'>
      <img  className="mb-5" src={image} alt="" />
        <div className='mb-8 flex gap-x-2 text-sm'>
          <p className='bg-green-600 rounded-full text-white px-4'>{type}</p>
          <p className='bg-violet-600 rounded-full text-white px-4'>{country}</p>
        </div>
          <div className='font-semibold  text-lg max-w-[260px]'> {address} </div>
          <div className='flex text-grey-600 gap-2 items-center'>
            <div>
              <BiBed className='inline-block' /> <span className='text-sm'>{bedrooms} bedrooms</span>
            </div>
            <div>
              <BiBath className='inline-block' /> <span className='text-sm'>{bathrooms} bathrooms</span>
            </div>
            <div>
              <BiArea className='inline-block' /> <span className='text-sm'>{surface} m2</span>
            </div>
          </div>
          <div className='font-bold text-violet-600 mb-4 '>
            {price}
          </div>
      </div>

  </div>;
};

export default House;

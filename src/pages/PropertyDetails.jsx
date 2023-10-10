import React from 'react';

import { housesData } from '../data';
import { useParams} from 'react-router-dom';
import {BiBed,BiArea,BiBath} from  'react-icons/bi' ;
import{Link} from 'react-router-dom' ;

const PropertyDetails = () => {
  const {Id} = useParams() ;
  console.log(Id);
  const house = housesData.find((house)=>house.id === parseInt(Id)) ;
  console.log(house);
  return <div className='container mx-auto min-h-[800px] mb-14'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                <div>
                  <h2 className='text-2xl font-semi-bold'> {house.name} </h2>
                  <h2 className='text-lg mb-4'> {house.address}</h2>
                </div>
                <div className='mb-4 lg:mb-0 flex  gap-x-2 text-sm text-center'>
                    
                    <div className='bg-green-500 text-white  px-3 rounded-full'>{house.type}</div>
                    <div className='bg-violet-500 text-white  px-3 rounded-full'> {house.country} </div>
                </div>
                <div className='text-3xl font-semibold text-violet-700'>{house.price} $</div>
            </div>
            <div className='flex flex-col items-start gap-8 lg:flex-row'>
              <div className='max-w-[768px]'>
                  <div className='mb-8'>
                    <img src={house.imageLg} alt="" />
                  </div>
                  <div className='flex gap-x-6 text-violet-700 mb-6'> 
                    <div className='flex gap-x-1'>
                      <BiBed className='text-2xl' /> 
                      <div>{house.bedrooms  }</div>
                    </div>
                    <div className='flex gap-x-1'>
                      <BiBath className='text-2xl' /> 
                      <div>{house.bathrooms}</div>
                    </div>
                    <div className='flex gap-x-1'>
                      <BiArea className='text-2xl' /> 
                      <div>{house.surface}</div>
                    </div>
                    </div>
                      <div>{house.description}</div>

              </div>
              <div className=' flex-1 w-full mb-8 border border-gray-600 rounded-lg rounded-tl-[90px]  px-4 py-5'>
                  <div className='flex items-center gap-x-4 mb-8'>
                    <div className='border border-gray-500 rounded-full p-1'> 
                      <img src={house.agent.image} alt="" />
                    </div>
                    <div>
                      <div className='font-bold  text-lg'>{house.agent.name}</div>
                      <Link to='' className=' text-violet-700 text-sm'>
                        View Listings 
                      </Link>  
                    </div>
                  </div>
                  <form action=""  className='flex flex-col  first-letter:'>
                    <input type="text" placeholder='Name*' className='  mb-2 border border-gray-500 outline-none  hover:border-violet-700 focus:border-violet-700 w-full  px-4 h-14 text-sm' />
                    <input type="text"  placeholder='Email*' className='  mb-2 border border-gray-500 outline-none  hover:border-violet-700 focus:border-violet-700 w-full  px-4 h-14 text-sm' />
                    <input type="text"  placeholder='Phone*' className='  mb-2 border border-gray-500 outline-none  hover:border-violet-700 focus:border-violet-700 w-full  px-4 h-14 text-sm' />
                    <textarea className='p-4 h-36 text-sm text-gray-500 border border-gray-500  outline-none hover:border-violet-700 focus:border-violet-700 w-full resize-none 'placeholder='Message*' ></textarea>
                    <div className='flex gap-x-2 mt-4'>
                      <button className='bg-violet-700 hover:bg-violet-800 text-white p-4 text-sm  w-full transition '>
                        Send Message
                      </button>
                      <button className='border p-4  border-violet-800   text-violet-800 w-full transition hover:text-violet-500 hover:border-violet-500 text-sm'>
                        Call
                      </button>
                    </div>
                  </form>
              </div>
            </div>
        </div>;
};

export default PropertyDetails;

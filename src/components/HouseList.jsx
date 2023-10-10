import React, {useContext} from 'react';
import{HouseContext} from './HouseContext' ;
import {ImSpinner2} from 'react-icons/im' ;
import { Link } from 'react-router-dom';
import House from './House' ;

const HouseList = () => {

  const {houses,loading} = useContext(HouseContext) ;
console.log(loading);
  if(loading){
      return (
      <ImSpinner2 className='text-4xl mx-auto text-violet-700 mt-[100px] animate-spin' />

      )
  }
  if(houses.length <1){
    return (
      <h2 className='text-5xl text-center mx-auto mt-40 text-violet-400'>Sorry, Nothing Found </h2>

    )
  }
  return <section  className='mb-20'>

    <div className='container mx-auto '>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
        {
          houses.map((house, index)=>{
              return <Link  key={index}  to={`property/${house.id}`}>
              
                <House house={house}  />
              </Link>
          })
        }
      </div>

    </div>
  </section>;
};

export default HouseList;

import React from 'react';

const CardInterest = ({ title, url }) => (
  <div className=' mx-15 my-5'>
    <div className='mx-10 justify-between max-w-md'>
      <span className='text-md w-full font-semibold text-center'>{title}</span>
    </div>
    <div className='m-5'>
      <img src={url} alt='' className='w-[240px] h-[240px] rounded-2xl' />
    </div>
  </div>
);

export default CardInterest;

import React from 'react';

const ContainerImage = ({ title, url }) => (
  <div className='mx-15 text-center my-5'>
    <span className='text-md w-full font-semibold text-center'>{title}</span>

    <img src={url} alt='' className='mt-4 w-[250px] h-[250px] rounded-full' />
  </div>
);

export default ContainerImage;

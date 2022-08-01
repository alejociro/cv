import React from 'react';

const CardRelatedCourse = ({ title, date }) => (
  <div className='bg-white w-auto max-w-md flex border-blue-700  rounded-xl duration-150 ease-in-out hover:scale-105'>
    <div className='bg-blue-700 w-[50px] rounded-l-xl font-bold' />
    <div className='rounded-r-xl hover:bg-blue-300'>
      <div className='ml-4 flex flex-auto px-7 gap-4 py-10 justify-between'>
        <p className='text-gray-700 font-bold'>{title}</p>

        <p className='text-blue-700 font-semibold'>{date}</p>
      </div>
    </div>
  </div>
);

export default CardRelatedCourse;

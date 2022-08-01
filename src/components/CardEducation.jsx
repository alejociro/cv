import React from 'react';

const CardEducation = ({ title, school, date }) => (
  <div className='w-auto w-96 border-blue-700  rounded-xl duration-150 ease-in-out hover:scale-105'>
    <div className='bg-blue-700 w-full rounded-t-xl p-3 font-bold text-center text-2xl text-white'>
      {title}
    </div>
    <div className='bg-white w-full h-36 rounded-b-xl border-t-white border-t-2 hover:bg-blue-200'>
      <div className='ml-4 flex flex-auto px-4 gap-4 py-10 justify-between'>
        <p className='text-gray-800 font-bold'>{school}</p>

        <p className='text-blue-800 font-semibold'>{date}</p>
      </div>
    </div>
  </div>
);

export default CardEducation;

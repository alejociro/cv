import React from 'react';

const BarProgress = ({ title, percentage }) => (
  <div className='my-7'>
    <div className='flex items-center mx-5 w-full justify-between'>
      <span className='text-md w-full font-semibold text-center'>{title}</span>
    </div>
    <div className='my-2 h-3 m-5 bg-white rounded'>
      <div
        className='h-3 rounded bg-blue-500 w-full hover:bg-blue-700'
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

export default BarProgress;

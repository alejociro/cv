import React from 'react';

const Sidebar = () => (
  <div className='flex justify-around p-5 w-auto flex-wrap rounded-xl bg-gray-200 lg:fixed lg:ml-0 lg:fixed lg:overflow-y-auto lg:block lg:flex-col lg:h-screen lg:shadow-xl lg:shadow-blue-500 lg:bg-white relative lg:w-[400px] lg:z-20'>
    <div className='lg:w-full w-3/5'>
      <img className='w-full rounded-xl' src='/statics/mia.jpeg' alt='' />
    </div>
    <div className='text-center mt-5 flex flex-col'>
      <h1>Alejandro Castrillón Ciro</h1>
      <br />
      <hr />
      <br />
      <p className='m-2'>Desarrollador Full Stack</p>
      <p className='m-2'>alejocc528@gmail.com</p>
      <p className='m-2'>3114277390</p>
      <p className='m-2'>2117747</p>
      <div className='justify-center flex gap-10 mt-20 flex-wrap'>
        <a href='https://github.com/alejociro'>
          <img src='/statics/github.png' alt='' />
        </a>
        <a href='https://www.linkedin.com/in/alejandro-castrillon-ciro-9539491ba/'>
          <img src='/statics/linkedin.png' alt='' />
        </a>
      </div>
    </div>
  </div>
);

export default Sidebar;

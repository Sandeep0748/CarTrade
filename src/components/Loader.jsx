import React from 'react';

const Loader = ({ size = 16, borderColor = 'border-gray-300', spinColor = 'border-t-primary' }) => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div 
        className={`animate-spin rounded-full h-${size} w-${size} border-4 ${borderColor} ${spinColor}`}>
      </div>
    </div>
  );
};

export default Loader;

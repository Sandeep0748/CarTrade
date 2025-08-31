import React from 'react';

const Title = ({ title, subTitle, className = "", subClassName = "" }) => {
  return (
    <div className={`text-center mb-6 ${className}`}>
      <h1 className="font-semibold text-3xl text-gray-800">{title}</h1>
      {subTitle && (
        <h2 className={`text-sm md:text-base text-gray-500 mt-2 max-w-xl mx-auto ${subClassName}`}>
          {subTitle}
        </h2>
      )}
    </div>
  );
};

export default Title;

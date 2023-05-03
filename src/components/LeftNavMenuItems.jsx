import React from 'react';

const LeftNavMenuItems = ({ text, icon, className, action }) => {
  return (
    <div
      className={
        'text-white text-sm cursor-pointer h-10 flex items-center px-3 md-[1px] rounded-lg hover:bg-white/[0.15] ' +
        className
      }
      onClick={action}
    >
      <span className="mr-5 text-xl">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItems;

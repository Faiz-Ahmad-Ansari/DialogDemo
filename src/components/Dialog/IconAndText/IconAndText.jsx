import React from 'react';

const IconAndText = ({ icon, text }) => {
  return (
    <div className="icon-and-text">
      {icon && <span className="icon">{icon}</span>}
      <span className="text">{text}</span>
    </div>
  );
};

export default IconAndText;
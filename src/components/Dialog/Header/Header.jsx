import React from 'react';
import IconAndText from '../IconAndText/IconAndText';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

const Header = ({ title, icon, buttons }) => {
  return (
    <div className="dialog-header">
      <IconAndText icon={icon} text={title} />
      {buttons && <ButtonGroup>{buttons}</ButtonGroup>}
    </div>
  );
};

export default Header;
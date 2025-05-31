import React from 'react';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

const Footer = ({ buttons, info }) => {
  return (
    <div className="dialog-footer">
      {info && <div className="footer-info">{info}</div>}
      {buttons && <ButtonGroup>{buttons}</ButtonGroup>}
    </div>
  );
};

export default Footer;
import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

const Dialog = ({ isOpen, onClose, header, content, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        <Header {...header} />
        <Content>{content}</Content>
        <Footer {...footer} />
      </div>
    </div>
  );
};

export default Dialog;
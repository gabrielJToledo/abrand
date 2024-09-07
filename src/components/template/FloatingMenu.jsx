import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './FloatingMenu.css'; // Você precisa criar este arquivo CSS

const FloatingMenu = ({ menuDots }) => {
  return (
    <div className="floating-menu">
      {menuDots.map((item, index) => (
        <div key={index} className="menu-item">
          <ScrollLink
            to={item.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`menu-dot`}
          >
          </ScrollLink>
          <div className="menu-tooltip">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FloatingMenu;

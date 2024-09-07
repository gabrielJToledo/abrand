import React, { useState, useEffect } from 'react';
import './Header.css';
import { siteName, menu } from '../../global';
import logoImg from '../../assets/images/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Headroom from 'react-headroom';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className='header-bg'
    >
      <List>
        {menu.map((item, index) => (
          <ListItem key={index}>
            {item.isComponent ? (
              <RouterLink
                className={`menu_item text-decoration-none ${currentPath === '/menu' ? 'active' : ''}`}
                to={item.link}
                onClick={handleMenuItemClick}
              >
                <ListItemText primary={item.name} />
              </RouterLink>
            ) : (
              currentPath !== '/' ? (
                <RouterLink
                  className={`menu_item text-decoration-none ${currentPath === '/' ? 'active' : ''}`}
                  to="/"
                  onClick={handleMenuItemClick}
                >
                  <ListItemText primary={item.name} />
                </RouterLink>
              ) : (
                <ScrollLink
                  className={`menu_item text-decoration-none ${item.link === currentPath ? 'active' : ''}`}
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleMenuItemClick}
                >
                  <ListItemText primary={item.name} />
                </ScrollLink>
              )
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <header className='w-100' id='headerSection'>
      <Headroom>
        <div className="header z-index20 d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className={`menu-icon d-flex`}>
              <IconButton onClick={toggleDrawer(true)} color="inherit" className='ms-3'>
                <FontAwesomeIcon icon={faBars} color='white' size="1x" />
              </IconButton>
            </div>


            <div className="logo_bg">
              <ScrollLink
                to={`headerSection`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img style={{ cursor: 'pointer' }} className='logo me-3' src={logoImg} title={`Logo da ${siteName}`} alt={`Logo da ${siteName}`} />
              </ScrollLink>
            </div>

            <div className='header-bg-2 d-flex align-items-center justify-content-end'>
              <div className="ms-5 show-desk d-none d-md-flex align-items-center justify-content-end me-5">
                <div className='height-footer-div-mobile'>
                  <a className='header-icons mx-2' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a className='header-icons mx-2' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a className='header-icons mx-2' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </div>
              </div>


            </div>
          </div>

          <Drawer
            anchor="right"
            open={isOpen}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: '#fffff',
              },
            }}
          >
            {list()}
          </Drawer>

        </div>
      </Headroom>
    </header>
  );
}

export default Header;

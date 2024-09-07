import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer style={{ height: "400px" }} className="footer w-100 d-flex flex-column align-items-center">
      <div className="wrapper">
        <div className='d-flex justify-content-around flex-column align-items-center w-100'>
          <img className='logo_footer' src={logo} alt="Logo Makedo" title='Logo Makedo' />
          <div className="d-flex justify-content-around">
            <div className='card-footer mx-2'>
              <p className='fw-bold secondary-color fs-2 text-center'>E-mail</p>
              <p className='secondary-color fw-light'>contato@contato.com</p>
            </div>

            <div className='card-footer mx-2'>
              <p className='fw-bold secondary-color fs-2'>Telefone</p>
              <p className='secondary-color fw-light text-center'>(11) 1234-5678</p>
            </div>
          </div>

          <div className='height-footer-div-mobile'>
            <a className='secondary-color mx-2' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a className='secondary-color mx-2' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center ">
          <p className='my-2'>Desenvolvido por Profuse Fruits</p>
        </div>

        <div className="map-container" style={{ width: '100%', height: '100%' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.2555791982835!2d-46.65942438450725!3d-23.55842108474797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d0df0b4b97%3A0x754e0926723f63d2!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-000!5e0!3m2!1spt-BR!2sbr!4v1632927843884!5m2!1spt-BR!2sbr"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

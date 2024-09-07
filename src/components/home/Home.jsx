import React from 'react';
import { useSpring, animated, useScroll } from '@react-spring/web';
import { Parallax } from 'react-parallax';
import Slider from 'react-slick';
import './Home.css';

import banner from "../../assets/images/banner-01.jpg";
import client2 from "../../assets/images/clientes/logo-02.jpg";
import client3 from "../../assets/images/clientes/logo-03.jpg";
import company from "../../assets/images/chef.jpg";
import { menuDots } from '../../global';
import FloatingMenu from '../template/FloatingMenu';

import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import Contact from '../contact/Contact';
import Services from '../services/Services';
import MainService from '../services/MainService';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const settingsPortifolio = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Home() {
  const { ref: chefRef, inView: chefInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const chefSpring = useSpring({
    transform: chefInView ? 'translateY(0)' : 'translateY(50px)',
    opacity: chefInView ? 1 : 0.5,
    config: { tension: 210, friction: 20 },
  });

  return (
    <div className="home">

      <div className="bg-home-screen d-flex flex-column align-items-center">
        <div className="wrapper d-flex flex-column justify-content-center align-items-center container--banner w-100">
          <div className='my-5 d-flex flex-column justify-content-center align-items-center'>
            <p className='home-text text-center secondary-color text-uppercase fontLibre'>
              Eleve sua marca ao
            </p>

            <p className='home-text text-center secondary-color text-uppercase fontLibre'>
              Próximo nível.
            </p>

            <Link
              style={{ cursor: 'pointer' }}
              to={`chefeLink`}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='btn-cta1'
            >
              Inicie sua transformação.
            </Link>
          </div>
        </div>

        <div id='recomendationLink' className='d-flex justify-content-center w-100 mb-5'>
          <div className="wrapper d-flex flex-column justify-content-center align-items-center py-5">
            <div className='w-100 d-flex flex-column align-items-center pb-5'>
              <p className='home-text text-center secondary-color text-uppercase fontLibre'>
                Nossas
              </p>

              <p className='home-text text-center secondary-color text-uppercase fontLibre'>
                Soluções
              </p>
            </div>
            <div className='w-100'>
              <Slider {...settings}>
                <div className='d-flex flex-column align-items-center'>
                  <div className="services-card-home m-1">
                    <p className='text-center w-50 fw-light h-75'>"Uma explosão de sabores! A cozinha do Chef Alexandre é uma verdadeira obra de arte." - Maria F., São Paulo</p>
                  </div>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <div className="services-card-home m-1">
                    <p className='text-center w-50 fw-light h-75'>"Cada prato é uma viagem sensorial. Sem dúvida, o melhor jantar da minha vida." - João R., Rio de Janeiro</p>
                  </div>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <div className="services-card-home m-1">
                    <p className='text-center w-50 fw-light h-75'>"As aulas de culinária do Chef Alexandre mudaram minha forma de cozinhar. Recomendo a todos!" - Beatriz L., Belo Horizonte</p>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-center'>
                  <div className="services-card-home m-1">
                    <p className='text-center w-50 fw-light h-75'>"As aulas de culinária do Chef Alexandre mudaram minha forma de cozinhar. Recomendo a todos!" - Beatriz L., Belo Horizonte</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="wrapper">
          <div className='w-100 d-flex flex-column align-items-center pb-5'>
            <p className='home-text text-center secondary-color text-uppercase fontLibre'>
              Nosso
            </p>

            <p className='home-text text-center secondary-color text-uppercase fontLibre'>
              Portifólio:
            </p>
          </div>
          <Slider {...settingsPortifolio}>
            <div className='d-flex flex-column align-items-center'>
              <img className='img-banner' src={banner} alt="" />
            </div>
            <div className='d-flex flex-column align-items-center'>
              <img className='img-banner' src={banner} alt="" />
            </div>
            <div className='d-flex flex-column align-items-center'>
              <img className='img-banner' src={banner} alt="" />
            </div>

            <div className='d-flex flex-column align-items-center'>
              <img className='img-banner' src={banner} alt="" />
            </div>
          </Slider>
        </div>
      </div>



      <Contact />
    </div>
  );
}

export default Home;

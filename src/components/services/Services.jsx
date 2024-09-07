import React from 'react';
import { Parallax } from 'react-parallax';
import './Services.css';
import service1 from "../../assets/images/servicos/servico-01.png";
import service2 from "../../assets/images/servicos/servico-02.png";
import service3 from "../../assets/images/servicos/servico-03.png";

const Services = () => {
  return (
    <div id='serviceLink' className='d-flex justify-content-center w-100'>
      <Parallax 
        className='bg-services'
        bgImage={require('../../assets/images/pratos/prato-01.webp')}
        strength={200}
      >
        <div className="wrapper d-flex flex-column align-items-center py-5">

          <div className="w-100 d-flex flex-wrap justify-content-center mt-5">
            <div className=" card-home">
              <img src={service1} alt="Clareamento Dental Profissional" className="card-img-home" />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title fontLibre text-center fw-bold">Jantar <br /> Privado</h5>
                <div className="doubleStripe color-black my-3"></div>
                <p className="card-text text-center fontLibre mb-5">Uma experiência gastronômica exclusiva, no conforto da sua casa.                </p>
              </div>
            </div>

            <div className=" card-home mx-4">
              <img src={service2} alt="Ortodontia Estética" className="card-img-home" />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title fontLibre text-center fw-bold">Aulas de <br /> Culinária</h5>
                <div className="doubleStripe color-black my-3"></div>
                <p className="card-text text-center fontLibre mb-5">Aprenda técnicas culinárias diretamente com um chef renomado.                </p>
              </div>
            </div>

            <div className=" card-home">
              <img src={service3} alt="Implantes Dentários" className="card-img-home" />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title fontLibre text-center fw-bold">Consultoria <br /> Gastronômica</h5>
                <div className="doubleStripe color-black my-3"></div>
                <p className="card-text text-center fontLibre mb-5">Eleve o padrão do seu restaurante com a orientação de um expert.                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Services;

import React from 'react';
import { Parallax } from 'react-parallax';
import './Services.css';
import service3 from "../../assets/images/servicos/servico-03.png";

const MainService = () => {
  return (
    <div id='mainServiceLink' className='d-flex justify-content-center w-100'>
      <Parallax
        className='bg-services w-100'
        bgImage={require('../../assets/images/pratos/prato-02.webp')}
        strength={200}
      >
 
        <div className="wrapper d-flex flex-column align-items-center py-5">
          <div className="w-100 d-flex flex-wrap justify-content-center mt-5">
            <div className="card-home card-service-main">
              <div className="card-body py-5 px-4 d-flex flex-column align-items-center">
                <h5 className="card-title fs-3 fontLibre text-center fw-bold">Ravioli de Lagosta com <br /> Manteiga de Sálvia</h5>
                <p className='fontLibre text-center fw-light my-3'>Uma combinação sofisticada de sabores do mar e um toque aromático de sálvia.</p>
                <div className="doubleStripe color-black mb-3"></div>
                <p className="card-text text-center fs-6 fw-light fontLibre mb-5">
                  Massa fresca de ravioli <br /> <br />
                  Lagosta fresca <br /> <br />
                  Manteiga de alta qualidade <br /> <br />
                  Folhas de sálvia <br /> <br />
                  Limão siciliano <br /> <br />
                  Queijo parmesão ralado na hora

                </p>

                <button to="/" style={{ cursor: "pointer" }} className='fontLibre btn-service'>Ver Menu</button>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default MainService;

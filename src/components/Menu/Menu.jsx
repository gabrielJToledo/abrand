import React from 'react';
import './Menu.css';
import { Parallax } from 'react-parallax';

function Menu() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <Parallax
                className='w-100'
                style={{ height: '350px' }}
                bgImage={require('../../assets/images/pratos/prato-03.jpg')}
                strength={200}
            >
            </Parallax>

            <div className="wrapper d-flex flex-column align-items-center justify-content-center py-5">
                <div className="col-10 col-lg-4 d-flex flex-column align-items-center">
                    <h2 className='fontLibre text-center'>Menu</h2>
                    <div className="doubleStripe color-black"></div>

                    <h3 className="fontLibre mt-5">Entradas</h3>
                    <ul className="list-unstyled">
                        <li className='text-center mt-2 mb-5'><strong className='text-uppercase'>Carpaccio de Polvo com Vinagrete de Limão Siciliano</strong> <br /> Fatias finas de polvo marinado, servidas com um toque cítrico e azeite de oliva extra virgem.</li>
                        <li className='text-center my-5'><strong className='text-uppercase'>Tartar de Atum com Abacate e Crocante de Gergelim</strong> <br /> Atum fresco cortado em cubos, combinado com abacate cremoso e servido com um crocante de gergelim.</li>
                        <li className='text-center my-5'><strong className='text-uppercase'>Bruschetta de Burrata com Tomate Confitado</strong> <br /> Pão italiano crocante, coberto com burrata cremosa e tomates confitados em azeite de ervas.</li>
                    </ul>

                    <h3 className="fontLibre mt-4">Pratos Principais</h3>
                    <ul className="list-unstyled">
                        <li className='text-center mt-2 mb-5'><strong className='text-uppercase'>Ravioli de Lagosta com Manteiga de Sálvia</strong> <br /> Massa fresca de ravioli recheada com lagosta, Manteiga de sálvia e limão siciliano, Queijo parmesão ralado na hora.</li>
                        <li className='text-center my-5'><strong className='text-uppercase'>Filé Mignon ao Molho de Vinho Tinto com Risoto de Parmesão</strong> <br /> Filé mignon grelhado, Molho de vinho tinto e ervas, Risoto de parmesão.</li>
                        <li className='text-center my-5'><strong className='text-uppercase'>Peixe do Dia Grelhado com Purê de Batata-Doce e Legumes Salteados</strong> <br /> Peixe do dia (opções sazonais), Purê de batata-doce, Legumes salteados no azeite de oliva.</li>
                    </ul>

                    <h3 className="fontLibre mt-4">Sobremesas</h3>
                    <ul className="list-unstyled">
                        <li className='text-center mt-2 mb-5'><strong className='text-uppercase'>Tarte de Limão com Merengue Italiano</strong>  <br /> Base crocante de biscoito, recheada com creme de limão e coberta com merengue italiano tostado.</li>
                        <li className='text-center my-5'><strong className='text-uppercase'>Panna Cotta de Baunilha com Coulis de Frutas Vermelhas</strong> <br /> Uma sobremesa italiana clássica, feita com creme de baunilha e servida com um coulis fresco de frutas vermelhas.</li>
                        <li className='text-center my-5'><strong className='text-uppercase'>Fondant de Chocolate com Sorvete de Baunilha</strong> <br /> Bolo de chocolate com centro cremoso, servido quente com uma bola de sorvete de baunilha.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;

import React from "react";
import { Link } from "react-router-dom";
import photoChamada from "../photo-chamada.jpg";
import photoCard from "../photo-card.jpg";
import photoManifesto from "../photo-manifesto.jpg"
import book from "../../src/capa-de-livro.jpg";
import ceramica from '../../src/ceramica.jpg';
import tela from '../../src/tela.jpg';

function Homepage() {
  return (
    <div className="homepage-container container-fluid p-0">
      
      <div className="homepage-main container-fluid d-flex justify-content-center align-items-center ">
      
        <div className="row">

            <div className="col-2 text-right pr-0 ">
                  <h1 className="h1-chamada"> CONTRA </h1>
                 

                 
            </div>
           {/* <div className="col-8 div-image-chamada pl-0"></div> */}
            <div className="col-10 div-image-chamada pl-0">
                <img className="photo-chamada" src={photoChamada} alt="mulher deitada no chão pintando"/>
                <div className="h1-over-image-chamada"> FLUXO </div>
                    <span className="lugar-certo">O lugar certo</span>
                    <span className="para-artistas-independentes">para<span className="destaque-amarelo"> artistas independentes.</span></span>
            </div>
          
          <img />
        </div>
      </div>

      <div className="homepage-destaques container-fluid">
        {/*d-flex  justify-content-around align-items-center*/}
  <div className="homepage-destaques-two row align-items-center">
          <div className="col-1">
            <p className='destaques-p-left'>Destaques da semana</p>
              <hr className='hr-destaques-left'/>
          </div>

          <div className="col-10 d-flex justify-content-around">

          <div className="card ">
            <img className="card-img-top" src={book} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Livro</h5>
              <p className="card-text">
                Livro de poesias produzido de forma independente e artesanal.
              </p>
              <div className="btn-container-homepage">
              <Link to="/product/all" className="btn-homepage btn">Veja mais</Link>
              </div>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={ceramica} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Escultura</h5>
              <p className="card-text">
                Escultura feita em cerâmica feita manualmente a partir de bases de argila.
              </p>
              <div className="btn-container-homepage">
              <Link to="/product/all" className="btn-homepage btn">Veja mais</Link>
              </div>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={tela} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Pintura em tela</h5>
              <p className="card-text">
               Pintura a mão feita com tinta a óleo sobre tela de pano.
              </p>
              <div className="btn-container-homepage">
              <Link to="/product/all" className="btn-homepage btn">Veja mais</Link>
              </div>
            </div>
          </div>
            {/* <div className="col-1">
            <p className='destaques-p-right'>Destaques da semana</p>
          </div> */}

          </div>
        <div className="col-1">
        <hr className='hr-destaques-right'/>
            <p className='destaques-p-right'>Destaques da semana</p>
          </div>
        </div>
      </div>
      <div className="homepage-manifest">
        <h1>Manifesto</h1>
        <hr className="hr-manifesto" />

        <div className="div-manifesto container-fluid d-flex justify-content-center align-items-center  ">

          <div className="p-manifesto ">

        <p>
        Somos uma plataforma que não<br/> só valoriza os artistas<br/> independentes mas que também<br/> possibilita a divulgação e venda<br/> de suas artes.<br/>
Se você é alguém que valoriza<br/> esse tipo de conteúdo, ou alguém<br/> que já teve coragem o suficiente<br/> para mostrar ao sistema que você<br/> consegue<br/> 
criar e produzir algo fora dele, aqui<br/> é seu lugar! Junte-se a nós e faça<br/> parte desse movimento<br/> <span className='destaque-amarelo'>Contra Fluxo</span>        </p>
          </div>
        
        <img className='photo-manifesto' src={photoManifesto} />
        </div>
      </div> 
    </div>
  );
}

export default Homepage;

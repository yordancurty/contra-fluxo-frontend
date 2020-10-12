import React from "react";
//import { Link } from "react-router-dom";
import photoChamada from "../photo-chamada.jpg";
import photoCard from "../photo-card.jpg";
import photoManifesto from "../photo-manifesto.jpg"
function Homepage() {
  return (
    <div className="homepage-container container-fluid p-0">
      
      <div className="homepage-main container-fluid d-flex justify-content-center align-items-center ">
      
        <div className="row">

            <div className="col-2 text-right pr-0 ">
                  <h1 className="h1-chamada"> CONTRA </h1>
                 

                 
            </div>
           {/* <div class="col-8 div-image-chamada pl-0"></div> */}
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
            <img className="card-img-top" src={photoCard} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={photoCard} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={photoCard} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
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
      <div className="homepage-manifest ">
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

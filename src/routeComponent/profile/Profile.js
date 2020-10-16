import React, { useState, useEffect } from "react";
import photoProfile from "../../../src/photo-card.jpg";
import { Link } from "react-router-dom";
import api from "../../apis/index";
import photoCard from "../../../src/photo-card.jpg";

function Profile(props) {
  // console.log(props)

  //info do perfil editado
  const state = props.profileState


  //info dos produtos criados por esse usuário
  const [products, setProducts] = useState({});

  useEffect(() => {
    (async function fetchUser() {
      try {
        const response = await api.get("/profile");

        const productResponse = await api.get("/product");

        // console.log(response);

        props.setProfile({ ...response.data});

        setProducts({ ...productResponse.data });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="div-mother-profile ">
      <div className="d-flex">
        <div className="profile d-flex flex-column align-items-center ">
          <h3 className="align-self-start profile-title">Perfil</h3>
          <hr />
          
          <Link to="/profile/edit" >
          <i className="far fa-edit"></i>
          </Link>
          <Link to={`profile/delete/${props.loggedInUser._id}`} type="button">
            <i className="far fa-trash-alt"></i>
          </Link>
          <img className="photo-profile" src={photoProfile} />
          <img className="photo-profile" src={state.attachmentUrl} />
          <h5 className="user-name-profile">
            <span className="destaque-amarelo">{state.name}</span>
          </h5>
          <h6>{state.email}</h6>
          <p className="profile-description">{state.aboutMe}</p>
          <div className="">
            <a href={state.instagram}>
              <i className="social-media-icons-profile fab fa-instagram-square fa-2x"></i>
            </a>
            <a href={state.twitter}>
              <i className="social-media-icons-profile fab fa-twitter-square fa-2x"></i>
            </a>
            <a href={state.facebook}>
              <i className="social-media-icons-profile fab fa-facebook-square fa-2x"></i>
            </a>
            <a href={state.youtube}>
              <i className="social-media-icons-profile fab fa-youtube-square fa-2x"></i>
            </a>
          </div>
        </div>

        <div className="products-profile d-flex flex-row justify-content-center flex-wrap">
          <div className="card card-profile">
            <img
              className="card-img-top"
              src={photoCard}
              alt="Card image cap"
            />
            <div className="card-body">
              <Link to="/product/edit/:id">
                <i class="edit-icon-profile-card far fa-edit"></i>
              </Link>
              <Link to="/product-delete">
                <i class="delete-icon-profile-card far fa-trash-alt"></i>
              </Link>
              <h5 className="card-title card-title-profile">Card title</h5>
              <p className="card-text card-text-profile">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>

          <div className="card card-profile">
            <img
              className="card-img-top"
              src={photoCard}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title card-title-profile">Card title</h5>
              <p className="card-text card-text-profile">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>

          <div className="card card-profile">
            <img
              className="card-img-top"
              src={photoCard}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title card-title-profile">Card title</h5>
              <p className="card-text card-text-profile">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>

          <div className="card card-profile">
            <img
              className="card-img-top"
              src={photoCard}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title card-title-profile">Card title</h5>
              <p className="card-text card-text-profile">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

{/* /* 
{products.map((product) => <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">{product.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>)}
*/ }

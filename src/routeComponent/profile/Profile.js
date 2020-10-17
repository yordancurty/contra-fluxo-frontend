import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/index";

function Profile(props) {


  //info do perfil editado
  const state = props.profileState


  //info dos produtos criados por esse usuário
  const products = props.productsState

  useEffect(() => {
    (async function fetchUser() {
      try {
        const response = await api.get("/profile");

        const productResponse = await api.get(`/product`);

        props.setProfile({ ...response.data});

        props.setProducts([ ...productResponse.data]);
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
          <hr></hr>
          <div className="icons-edit-delete-profile">
            <div className="icon-edit-profile">
          <Link to={`profile/edit`} >
          <i className="icon-edit-profile far fa-edit"></i>
          </Link>
          </div>
          <div className="icon-delete-profile">
          <Link to={`profile/delete/${props.loggedInUser._id}`} type="button">
            <i className="icon-trash-profile far fa-trash-alt"></i>
          </Link>
          </div>
          </div>
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
          <Link to={`/product/new/${props.loggedInUser._id}`} type="button">
          <i className="icon-add-art fas fa-plus"> Add uma arte</i>
          </Link>
        </div>
{/* inicio do card de produto */}
          <div className="profile-products-cards">
          {products.map((product) => <div key={product._id} className="products-profile">
          <div className="card card-profile">
            <img className="card-img-top" src={product.mediaUrl} alt="Card image cap"/>
            <div className="card-body-product card-body">
              <Link to="/product/edit/:id">
                <i className="edit-icon-profile-card far fa-edit"></i>
              </Link>
              <Link to={`/product/delete/${product._id}`}>
                <i className="delete-icon-profile-card far fa-trash-alt"></i>
              </Link>
              <h5 className="card-title card-title-profile">{product.title}  | <span className="product-price">R${product.price},00</span></h5>
              <p className="card-text card-text-profile">{product.description}</p>
              <Link to={`/product/${product._id}`} className="link-detail-product-card">Saiba mais</Link>
            </div>
            </div>
          </div>)}
          </div>       
{/* final do card de produto */}  
          </div>
        </div>
  );
}

export default Profile;


import React, { useState, useEffect } from 'react';
import photoProfile from '../../../src/photo-card.jpg'
import { Link } from 'react-router-dom';
import api from "../../apis/index";


function Profile() {

   //info do perfil editado
   const [state, setState] = useState({})
    //info dos produtos criados por esse usuário
   const [product, setProduct] = useState({});

    useEffect(() => {
        (async function fetchUser() {
            try {

            const response = await api.get("/profile");

            const ProductResponse = await api.get("/product");

            setState({...response.data.user})

            setProduct({...ProductResponse.data})

            } catch(err) {
                console.error(err);
            }
        })();
    }, []); 
    

return (
    <div className='div-mother-profile '>
        <div className='row'>
        <div className='col-4'>
<h3>Profile {state.name}</h3>
                <hr/>
                <Link to="/profile-edit"><i className="far fa-edit"></i></Link>
               {/* <Link to={`profile/>delete/${}`}><i className="far fa-trash-alt"></i></ Link> */}
                <img className='photo-profile' src={photoProfile}/>
            </div>
            <div className='col-2 card-profile'>
                coooool
            </div>
            <div className='col-2 card-profile'>
                coooool
            </div>
            <div className='col-2 card-profile'>
                coooool
            </div>
            <div className='col-2 card-profile'>
                coooool
            </div>
{/*             {product.map((products) => <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>)} */}

        </div>
        <div className='row'>
        <div className='col-4'>
                profile
            </div>
            <div className='col-2 card-profile'>
                coooool
            </div>
            <div className='col-2 card-profile'>
                coooool
            </div>
            <div className='col-2 card-profile'>
                coooool
            </div>
            <div className='col-2
             card-profile'>
                coooool
            </div>
        </div>
    </div>
)
}

export default Profile;


//icon instagram - <a to=""><i className="fab fa-instagram"></i></a>

//icon twitter - <a></a><i className="fab fa-twitter-square"></i></a>

//icon facebook - <a></a><i className="fab fa-facebook-square"></i></a>

//icon youtube - <a><i className="fab fa-youtube-square"></i></a>

//delete profile - <Link to={{pathname: `/profile/delete/${user._id}`}}><i className="far fa-trash-alt"></i></ Link>







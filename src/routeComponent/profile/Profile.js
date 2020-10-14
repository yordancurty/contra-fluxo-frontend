import React, { useState, useEffect } from 'react';
import photoProfile from '../../../src/photo-card.jpg'
import { Link } from 'react-router-dom';
import api from "../../apis/index";
//import ConfirmationModal from '../../components/ConfirmationModal';

function Profile() {

    //info do perfil editado

    //info dos produtos criados por esse usuário
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async function fetchProducts() {
            try {

            const response = await api.get("/product");

            setProduct({...response.data})

            } catch(err) {
                console.error(err);
            }
        })();
    }, []);
    

return (
    <div className='div-mother-profile '>
        <div className='row'>
        <div className='col-4'>
                <h3>Profile</h3>
                <hr/>
                <Link to="/profile-edit"><i class="far fa-edit"></i></Link>
               {/*  <Link to={{pathname: `/profile/delete/${user._id}`}}><i className="far fa-trash-alt"></i></ Link> */}
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
            {product.map((products) => <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>)}

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

/*  <ConfirmationModal
          id="profileDeleteConfirmationModal"
          show={state.showModal}
          handleClose={handleModalToggle}
          profileId={state.selectedRowId}
        /> */


//icon instagram - <a to=""><i className="fab fa-instagram"></i></a>

//icon twitter - <a></a><i className="fab fa-twitter-square"></i></a>

//icon facebook - <a></a><i className="fab fa-facebook-square"></i></a>

//icon youtube - <a><i className="fab fa-youtube-square"></i></a>

//delete profile - <Link to={{pathname: `/profile/delete/${user._id}`}}><i className="far fa-trash-alt"></i></ Link>


/* const handleModalToggle = (userId) => {
    setState((prevState) => ({
        showModal: !prevState.showModal,
        selectedRowId: userId,
    }));
}; */





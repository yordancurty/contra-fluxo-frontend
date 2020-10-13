import React, { useState } from 'react';
import photoProfile from '../../../src/photo-card.jpg'
import { Link } from 'react-router-dom';
//import ConfirmationModal from '../../components/ConfirmationModal';

function Profile() {



return (
    <div className='div-mother-profile '>
        <div className='row'>
        <div className='col-4'>
                <h3>Profile</h3>
                <hr/>
                <Link to="/profile-edit"><i class="far fa-edit"></i></Link>
            {/*     <Link to={{pathname: `/profile/delete/${user._id}`}}><i className="far fa-trash-alt"></i></ Link> */}
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


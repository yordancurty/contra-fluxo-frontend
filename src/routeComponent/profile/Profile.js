import React from 'react';
import photoProfile from '../../../src/photo-card.jpg'
//import { Link } from 'react-router-dom';
//import ConfirmationModal from '../../components/ConfirmationModal';

function Profile() {
return (
    <div className='div-mother-profile '>
        <div className='row'>
        <div className='col-4'>
                <h3>Profile</h3>
                <hr/>
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


//icon instagram - <i className="fab fa-instagram"></i>

//icon twitter - 

//icon facebook - 

//icon youtube - 
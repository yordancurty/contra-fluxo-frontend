import React from 'react';
import photoProfile from '../../../src/photo-card.jpg'

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
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../apis/index";
import LoadingSpinner from "../../components/LoadingSpinner";

const ProfileDelete = () => {
    const { id } = useParams();
    const history = useHistory();

    async function handleClick() {
        try{
        
            const response = await api.delete(`/profile/${id}`);

            console.log(response);
            
            history.push("/");

        } catch(err) {
          console.error(err);
        }
    };

    return (
        <div>
 <p>Deleting...</p>
 <LoadingSpinner />
        </div>
    )
};

export default ProfileDelete;
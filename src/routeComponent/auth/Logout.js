import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import api from "../../apis/index";

function Logout(props) {
     
    const history = useHistory();

    useEffect(() => {
        (async function sendLogout(){
        try{
        
        await api.post("/logout");
        localStorage.removeItem("loggedInUser");
        props.setUser({});
        history.push("/");

        } catch(err){
           console.error(err); 
        }
        })();
    }, [props]);


    return (
        <div>Logging out...</div>
    )
};

export default Logout;
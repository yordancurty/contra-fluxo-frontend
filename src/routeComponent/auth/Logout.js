import React, {useEffect} from 'react';
import history from "react-router-dom";

function Logout(){

 useEffect(() => {
  localStorage.removeItem("loggedInUser");
  handleLogout();
  history.push("/");
  history.go();  
});

    return (
        <div>Logging out...</div>
    )
}

export default Logout;
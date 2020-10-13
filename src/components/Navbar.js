import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png"

function Navbar(props) {
    return(
        
        
            <nav className="navbar navbar-light bg-light pr-5 pl-5 ">
               <img className="logo ml-5" src={logo} alt="logo"/>    
                <ul className="nav justify-content-end">
                    <li className="nav-item mr-4 ">
                    <Link className="navbar-brand" to="/">Home</Link>

                    </li>
                    <li className="nav-item mr-4">
                    <Link className="navbar-brand menu-item" to="#">Sobre nós</Link>
                    </li>
                    <li className="nav-item mr-4">
                    <Link className="navbar-brand menu-item" to="#">Artes</Link>
                    </li>
                    <li className="nav-item mr-4">
                    <Link className="navbar-brand menu-item" to="/login">Login</Link>
                    </li>
                    {/* {props.user._id ? (<div><Link className="text-light" to="/logout">Logout</Link></div>) : null} */}
                    <li className="nav-item mr-5">
                      <div className="navbar-link">  
                        <Link className="navbar-brand ml-3" to="/signup">Cadastre-se</Link>
                        </div>
                    </li>
                </ul>
            </nav>
       
    );
}

export default Navbar;


/*CASO O USUÁRIO ESTEJA LOGADO - {props.user._id ? (
    <div>
      <span className="text-light">
        {props.user ? `Welcome, ${props.user.name} :)` : ""}
      </span>
      <span className="mx-2 navbar-text">|</span>
      <Link className="text-light" to="/logout">
        Logout
      </Link>
    </div>
  ) : null}
</div> */
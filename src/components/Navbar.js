import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png"

function Navbar(props) {
    return(
        
        
            <nav className="navbar navbar-light bg-light pr-5 pl-5 ">
              <Link to="/"><img className="logo ml-5" src={logo} alt="logo"/></Link>    
               <ul className="nav justify-content-end">
                    <li className="navbar-home mr-4 nav-item">
                    <Link className="navbar-brand menu-item" to="/">Home</Link>

                    </li>
                    <li className="nav-item mr-4">
                    <Link className="navbar-brand menu-item" to="#">Sobre nós</Link>
                    </li>
                    <li className="nav-item mr-4">
                    <Link className="navbar-brand menu-item" to="/product/all">Artes</Link>
                    </li>
                    <li className="nav-item mr-4">
                    <Link className="navbar-brand menu-item" to="/login">Login</Link>
                    </li>
                    <li className="nav-item mr-4">
                    {props.user._id ? (<div><Link className="navbar-brand menu-item" to="/profile">Perfil</Link></div>) : null}
                    </li>
                    <li className="nav-item mr-5">
                      <div className="navbar-link">
                      {props.user._id ? (<div className="navbar-logout"><Link className="nav-text-logout navbar-brand menu-item" to="/logout">Logout</Link></div>) : <Link className="navbar-brand ml-3" to="/signup">Cadastre-se</Link>}

                        </div>
                    </li>
                    <li className="nav-item mr-4">
                    <Link className="navbar-brand menu-item" to="/cart">Cart</Link>
                    </li>
               </ul>
            </nav>
       
    );
}

export default Navbar;
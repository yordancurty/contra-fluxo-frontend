import React from 'react';
import logo from '../../../src/logo.png';
//import api from "";
//import { useHistory } from "react-router-dom";

function LoginForm(){

/* const history = useHistory();
const [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
    error:""
});

const handleChange = (event) => {
    setState({ ...state,
        [event.currentTarget.name]: event.currentTarget.value,
    });

const handleSubmit = async (event) => {
     setState({
      ...state,
      loading: true
    })

try {

event.preventDefault();

const response = await api.post("http://localhost:4000/api/login", state)
console.log(response.data);


localStorage.setItem(
    "loggedInUser",
    JSON.stringify({
        user: {...response.data.user},
        token:response.data.token,
    })
);

setState({...state, loading: false})
 
   } catch (err) {
     setState({...state, loading: false, error: err.message})
    }
 }; 

};
 */

    return (
        <div className="form-container">
        <form className="form-box-1">
        <h1>Bem-vindx de volta a CONTRAFLUXO</h1>
        <div class="form-group">
                <label for="formGroupExampleInput">Email:</label>
                <input type="password" class="form-control" id="formGroupExampleInput" placeholder="@" />
             </div>
             <div class="form-group">
                <label for="formGroupExampleInput">Senha:</label>
                <input type="password" class="form-control" id="formGroupExampleInput" placeholder="*****" />
             </div>
             <button type="submit" class="btn-form btn btn-light">Entrar</button>
             <div className="d-flex justify-content-end">
             <img className="logo-form" src={logo} alt="logo"/>
             </div>
        </form>
        </div>
    )
}

export default LoginForm;

//form - onSubmit={handleSubmit}

//onChange={handleChange}
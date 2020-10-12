import React, { useState } from 'react';
import logo from '../../../src/logo.png';
import api from '../../apis/index';
import { useHistory } from "react-router-dom";
import LoadingButton from "../../components/LoadingButton";
import ErrorAlert from "../../components/ErrorAlert";

function SignupForm(){
  
  const history = useHistory();

  const [state, setState] = useState({
      name: "",
      email: "",
      password: "",
      loading: false,
      error: ""
    });

    const handleChange = (event) => {

      setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.value
      })
    }

    const handleSubmit = async (event) => {
      setState({
        ...state,
        loading: true
      })

      try {

        event.preventDefault();

        const response = await api.post("http://localhost:4000/api/signup", state)
        console.log(response) 
        setState({...state, loading: false})
        history.push("/")
      } catch (err) {
        setState({...state, loading: false, error: err.message})
      }

    }

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="form-box-1">
    <h1>Bem-vindx a CONTRAFLUXO</h1>
          <div class="form-group">
            <label htmlFor="signupNameInput">Nome:</label>
            <input type="name" class="form-control" id="signupNameInput" placeholder="Name" onChange={handleChange} value={state.name} />
          </div>

          <div class="form-group">
                <label htmlFor="signupEmailInput">Email:</label>
                <input type="email" class="form-control" id="signupEmailInput" placeholder="@" onChange={handleChange} value={state.email} />
          </div>
          
         <div class="form-group">
            <label htmlFor="signupPasswordInput">Senha:</label>
            <input type="password" class="form-control" id="signupPasswordInput" placeholder="*****" onChange={handleChange} value={state.password} />
         </div>

         {state.loading ? (<LoadingButton />) : (<button type="submit" className="btn-form btn btn-ligth">
          Criar Conta
         </button>)}
         {state.error ? <ErrorAlert error={state.error} /> : null}
      <img className="logo-form" src={logo} alt="logo"/>
    </form>
    </div>
    )
}

export default SignupForm;


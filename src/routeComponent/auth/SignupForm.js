import React, { useState } from 'react';
import logo from '../../../src/logo.png';
// import api from '../../apis/index';
// //import { useHistory } from "react-router-dom";
// import LoadingButton from "../../components/LoadingButton";
// import ErrorAlert from "../../components/ErrorAlert";

function SignupForm() {
 //let history = useHistory();

  //const [state, setState] = useState({});
  // {
  //   name: "",
  //   email: "",
  //   password: "",
  //   loading: false,
  //   error: "",
  // }  

  // const handleChange = (event) => {

  //   setState({
  //     ...state,
  //     [event.currentTarget.name]: event.currentTarget.value
  //   });
  // };

  //   const handleSubmit = async (event) => {
  //     setState({
  //       ...state,
  //       loading: true
  //     })

  //     try {

  //       event.preventDefault();
  //       console.log("BOTAO")
  //       // const response = await api.post("http://localhost:4000/api/signup", state)
  //       // console.log(response) 
  //       // setState({...state, loading: false})
  //        //history.push("/signup") 
  //     } catch (err) {
  //       setState({...state, loading: false, error: err.message})
  //     }
  //   }; 

  return (
    <div className="form-container d-flex justify-content-center align-items-center ">
      <div className="form-box-3">
        </div>
      <div className="form-box-2">
      </div>
      <form className="form-box-1">
      <h1>Bem-vindx a<br/> <span className="bold">CONTRAFLUXO</span></h1>
            <div className="form-group"> 
              <label htmlFor="signupNameInput">Nome:</label>
              <input type="name" className="form-control" id="signupNameInput" placeholder="Name" />
            </div>

            <div className="form-group">
                  <label htmlFor="signupEmailInput">Email:</label>
                  <input type="email" className="form-control" id="signupEmailInput" placeholder="@" />
            </div>
            
          <div className="form-group">
              <label htmlFor="signupPasswordInput">Senha:</label>
              <input type="password" className="form-control" id="signupPasswordInput" placeholder="*****" />
          </div>
          <button type="submit" className="btn-form btn btn-ligth">
            Criar Conta!
          </button>
        {/*   {state.loading ? (<LoadingButton />) : (<button type="submit" className="btn-form btn btn-ligth">
            Criar Conta
            </button>)}
          {state.error ? <ErrorAlert error={state.error} /> : null}  */}
        <img className="logo-form" src={logo} alt="logo"/>
      </form>
          
      </div>
    
    )
}

export default SignupForm;

//FORM - onSubmit={handleSubmit}

/* onChange={handleChange} value={state.name}

onChange={handleChange} value={state.email}

onChange={handleChange} value={state.password}  */


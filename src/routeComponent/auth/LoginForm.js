import React, { useState } from "react";
import logo from "../../../src/logo.png";
import { Link } from "react-router-dom";
import api from "../../apis/index";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../../components/ErrorAlert";
import LoadingButton from "../../components/LoadingButton";

function LoginForm(props) {
  const history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
    error: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = async (event) => 
  {
    setState({
      ...state,
      loading: true,
    });

    try {
      event.preventDefault();

      const response = await api.post(
        "/login", state);
    
      props.setUser({...response.data});  

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          user: { ...response.data.user },
          token: response.data.token,
        })
      );

      setState({ ...state, loading: false });

      history.push("/profile");
      history.go();
    } catch (err) {
      setState({ ...state, loading: false, error: err.message });
    }
  };

  return (
    <div className="form-container d-flex justify-content-center align-items-center">
      <div className="form-box-3"></div>
      <div className="form-box-2"></div>
      <form className="form-box-1" onSubmit={handleSubmit}>
        <h1>
          Bem-vindx de volta a<br />
          <span className="bold"> CONTRAFLUXO</span>
        </h1>
        <div class="form-group">
          <label htmlFor="loginEmailInput">Email:</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="loginEmailInput"
            placeholder="@"
            onChange={handleChange}
            value={state.email}
          />
        </div>
        <div class="form-group">
          <label htmlFor="loginPasswordInput">Senha:</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="loginPasswordInput"
            placeholder="*****"
            onChange={handleChange}
            value={state.password}
          />
        </div>
        {state.loading ? (<LoadingButton />) : (<button type="submit" class="btn-form btn btn-light btn-form-login">Entrar</button>)}
        <div className="d-flex justify-content-end"></div>
        <p className="mt-3">
          Não tem um conta? <Link to="/signup">Crie Agora</Link>
        </p>
        {state.error ? <ErrorAlert error={state.error} /> : null}
        <img className="logo-form-login" src={logo} alt="logo" />
      </form>
    </div>
  );
}

export default LoginForm;
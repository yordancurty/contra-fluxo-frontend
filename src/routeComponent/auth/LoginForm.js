import React from 'react';
import logo from '../../../src/logo.png';

function LoginForm(){
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
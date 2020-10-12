import React from 'react';
import logo from '../../../src/logo.png';

function SignupForm(){
    return (
    <div className="form-container">
    <form className="form-box-1">
    <h1>Bem-vindx a CONTRAFLUXO</h1>
          <div class="form-group">
            <label for="formGroupExampleInput">Nome:</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
          </div>
          <div class="form-group">
                <label for="formGroupExampleInput">Email:</label>
                <input type="password" class="form-control" id="formGroupExampleInput" placeholder="@" />
             </div>
         <div class="form-group">
            <label for="formGroupExampleInput">Senha:</label>
            <input type="password" class="form-control" id="formGroupExampleInput" placeholder="*****" />
         </div>
         <button type="submit" class="btn-form btn btn-primary">Criar conta</button>
         <img className="logo-form" src={logo} alt="logo"/>
    </form>
    </div>
    )
}

export default SignupForm;


import React from 'react';

function LoginForm(){
    return (
        <div>
        <h1>Bem-vindx de volta a CONTRAFLUXO</h1>
        <form>
              <div class="input-group-prepend">
              <label for="formGroupExampleInput">Email:</label>
              <div class="input-group-text">@</div>
                <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Email" />
             </div>
             <div class="form-group">
                <label for="formGroupExampleInput">Senha:</label>
                <input type="password" class="form-control" id="formGroupExampleInput" placeholder="*****" />
             </div>
             <button type="submit" class="btn btn-primary">Entrar</button>
        </form>
        <img src={logo} alt="logo"/>
        </div>
    )
}

export default LoginForm;
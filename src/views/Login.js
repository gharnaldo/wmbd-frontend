import React, { Component } from 'react';
import '../styles/Login.css'
import logo from '../assets/images/logo_original_login.png'
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      rut: '',
      pass: '',
      isLogged: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    if(this.state.rut == "bice" && this.state.pass == "bice")
    {
      this.setState({ rut: '', pass: '', isLogged: true})
    } else {
      alert("Credenciales de acceso invalidas")
      this.setState({ rut: '', pass: '', isLogged: false})
    }
  }

  render(){
    return(
      <div>
      { this.state.isLogged ?
        <Redirect to="/dashboard" />
      :
        <div class="limiter">
      		<div class="container-login100">
      			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
      				<form class="login100-form validate-form" onSubmit={ this.onSubmit }>
      					<span class="login100-form-title p-b-33">
      						<img src={logo} />
      					</span>

      					<div class="wrap-input100 validate-input" data-validate = "RUT es requerido">
      						<input
                    class="input100"
                    type="text"
                    value={ this.state.rut }
                    onChange={ (e) => { this.setState({ rut: e.target.value }) } }
                    placeholder="RUT" />
      						<span class="focus-input100-1"></span>
      						<span class="focus-input100-2"></span>
      					</div>

      					<div class="wrap-input100 rs1 validate-input" data-validate="Clave es requerida">
      						<input
                    class="input100"
                    type="password"
                    value={ this.state.pass }
                    onChange={ (e) => { this.setState({ pass: e.target.value }) } }
                    placeholder="Clave" />
      						<span class="focus-input100-1"></span>
      						<span class="focus-input100-2"></span>
      					</div>

      					<div class="container-login100-form-btn m-t-20">
      						<button class="login100-form-btn">
      							Ingresar
      						</button>
      					</div>

      					<div class="text-center p-t-45 p-b-4">
      						<span class="txt1">
      							Recuperar&nbsp;
      						</span>

      						<a href="#" class="txt2 hov1">
      							Clave
      						</a>
      					</div>
      				</form>
      			</div>
      		</div>
      	</div>
      }
      </div>
    );
  }
}

export default Login;

import React from "react";
import '../styles/LoginStyle.css';
import imgBandeira from '../assets/images/imgBandeira.JPG';
import logoRep from '../assets/images/logoRep.png';

function LoginPage(){
    return(
        <>
        <title>Login</title>
        <header className = "loginPage">
            <div className = "container-img">
                <img src={imgBandeira} className = "img-background"></img>
            </div>
            <div className = "container-login">
                <img src={logoRep} className = "img-rep"></img>
                <h2>Entrar</h2>
                <form className="input-login">
                    <input name="usuario" placeholder="Usuário"></input>                
                    <input name="senha" placeholder="Senha"></input>
                    <button name="entrar">Entrar</button>
                </form>
                <h3 href="#esqueci-a-senha">Esqueci minha senha</h3>
            </div>
        </header>
        </>
    )
}

export default LoginPage;
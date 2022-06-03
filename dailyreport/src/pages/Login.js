import React from 'react'
import "../css/Login.css"

const Login = () =>{
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const button = document.getElementById('login')

    button.addEventListener('click',(e)=>{
        e.preventDefault()

        const data={
            username: username.value,
            password: password.value
        }
        console.log(data)
    })
    return(
        <div>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" 
                integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" 
                crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <div className='login'>
        
            <form>
                <h2 className='tituloLogin'>Inicio de sesión</h2>
                <label to="usuario" className="ingreso">
                    <h3>Usuario</h3>
                    <i class="fa-solid fa-user"></i>
                    <input type="text" name="usuario" className="formUsuario" id='username'/>
                </label>    
                <label to="password" className="ingreso">
                    <h3>Contraseña</h3>
                    <i class="fa-solid fa-key"></i>
                    <input type="password" name="password" className="formPassword" id='password'/>
                </label>
                <a href='#' className="link">Olvidaste tu contraseña?</a>
                
                <button id='login'>Login</button>
            </form>
            </div>
        </div>
    )
}

export default Login;
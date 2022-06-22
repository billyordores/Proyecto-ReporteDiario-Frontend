import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import "../css/Login.css"


const Login = () =>{

    const {redireccion} = useAuth0();
    
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const user = "jorge";
    const pass = "Becario21";
    
    const Ingresar = (e) => {
        e.preventDefault()
        
        if(password===pass & username===user){
            console.log('Entraste con mi login :3')
        }
        else{
            console.log('La contraseña o usuario ingresado es incorrecto')
        }
        setPassword('')
    }

    const alerta =()=>{
        alert("Preguntale a tu gfe")
    }

    return(
        <div>
            <div className='login'>
        
            <form on onSubmit={() => redireccion()}>
                <h2 className='tituloLogin'>Inicio de sesión</h2>

                <label to="usuario" className="ingreso">
                    <h3>Usuario</h3>
                    <i class="fa-solid fa-user"></i>
                    <input type="text" name="usuario" className="formUsuario" id='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                </label>    

                <label to="password" className="ingreso">
                    <h3>Contraseña</h3>
                    <i class="fa-solid fa-key"></i>
                    <input type="password" name="password" className="formPassword" id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </label>

                <a href='#' className="link" onClick={alerta}>Olvidaste tu contraseña?</a>

                <button onClick={() => redireccion()}>Ingresar</button>
            </form>
            </div>
        </div>
    )
}

export default Login;
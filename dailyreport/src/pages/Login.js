import React from 'react'
import "../css/Login.css"

const Login = () =>{
    return(
        <div>
            <h2>Aprendiendo a hacer un login</h2>

        <form>
            <label to="usuario" className="ingreso"><p>usuario</p></label>
                <input type="text" name="usuario" className="formUsuario"/>
                <input type="password" name="password" className="formPassword"/>
                <input type="submit" name="" className="" value="enviar"/>
        </form>
        </div>
    )
}

export default Login;
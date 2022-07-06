import '../styles/Login.css'
import React, { Component, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import md5 from 'md5';

const baseUrl="http://localhost:3004/usuarios";

class LoginPage extends Component{

    state={
        error: false
    }

    state={
        form: {
            username: '',
            password: ''
        }
    }

    handleChange = (e) =>{
        this.setState({
            form: {
                ...this.setState.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSecion = async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(Response=>{
            if(Object.keys(Response.data).length>0){
                localStorage.setItem('token', '09876')
                window.location.href = '/plantas'
            }else{
                this.setState({error: true})
                setTimeout(() => {
                    this.setState({ error: false })
                }, 3000);
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
    render(){

    return (
        <>
            <div className='fondoLogin'>
            <div className='login'>
        
            <form>
                <h3 className='tituloLogin'>Login</h3>

                <label to="usuario" className="ingreso">
                    <input type="text" name="username" className="formUsuario" id='username' placeholder='Username' onChange={this.handleChange}/>
                </label>    

                <label to="password" className="ingreso">
                    <input type="password" name="password" className="formPassword" id='password' placeholder='Password' onChange={this.handleChange}/>
                </label>
                { this.state.error && 

                <h6 className="text-danger">Datos incorrectos</h6>
                }
                <a href='#' className="link">Recordar Contraseña</a>
            </form>
                <button onClick={(e)=>{
                e.preventDefault()
                this.iniciarSecion()
                }} className='botonIngreso'>Ingresar</button>
            </div>
        </div>
        </>

    )
    }
}

export default LoginPage;
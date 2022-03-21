import React, { Component } from 'react'
import Conten from '../components/Conten'
import Navbar from '../components/Navbar'
import '../css/Plantas.css'

class Plantas extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Conten/>
            </div>
        )
    }
}

export default Plantas;
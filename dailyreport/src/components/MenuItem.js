import React, { Component } from 'react';

class MenuItem extends Component{
    render(){
        return(
            <div className='category'>
                <li>
                    <a href='#'>{this.props.name}</a>
                </li>
            </div>
        );
    }
}

export default MenuItem;

/*AQUI IRA EL JSON DE MADELINE*/
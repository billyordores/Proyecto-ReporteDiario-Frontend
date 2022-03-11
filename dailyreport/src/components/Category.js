import React, { Component } from 'react';
import MenuItem from './MenuItem'; /*Se cambiara de ruta*/
import '../css/Category.css' /*Se cambiara de ruta*/

class Category extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false
        }
    }

    handleClick(event){
        event.preventDefault();
        this.setState({
            visible: !this.state.visible
        })
    }

    render(){
        return(
            <div className='category'>
                <li>
                    <h3 onClick={this.handleClick.bind(this)}>{this.props.name}</h3>
                        <ul className={this.state.visible?'visible':'no-visible'}>
                            {this.props.item.map((item)=>{
                                return <MenuItem name={item} key={item}/>
                            })}
                        </ul>
                </li>
            </div>
        );
    }
}

export default Category;
/*AQUI HARE EL MAP CON EL JSON DE BACKEND*/
import React, {Component} from "react";
import '../css/MenuItem.css'

class MenuItem extends Component{
    render(){
        return(
            <div>
                <li>
                    <a href="#">{this.props.name}</a>
                </li>
            </div>
        )
    }
}

export default MenuItem;
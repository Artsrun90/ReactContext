import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Nav extends Component {
    render(){
        return(
            <nav>
                <h3>Logo</h3>
                <ul className="myMenu">
                    <Link to="/home">
                        <li>Home</li>
                    </Link>

                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    
                    <Link to='/blog'>
                        <li>Blog</li>
                    </Link>
                    <Link to='/cars/:name'>
                        <li>Car</li>
                    </Link>
                    <Link to='/cars'>
                        <li>Carinfo</li>
                    </Link>

                </ul>
            </nav>
        )
    }
}
export default Nav;
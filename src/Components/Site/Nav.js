import React from 'react';
import {Link} from 'react-router-dom';
// import './App.css'
import s from "./body.module.css"
class Nav extends React.Component {
    render(){
        return(
            <nav className={s.nav}>
                <div className={s.logo}>
                <h2 className={s.h}>React</h2>
                </div>                
               {/* <h2 className={s.h}>Logo</h2> */}
                <ul className={s.Menu}>
                    <Link to='/home'>
                        <li>Home</li>
                    </Link>
                    <Link to='/portfolio'>
                        <li>Portfolio</li>
                    </Link>
                    <Link to='/blog'>
                        <li>Blog</li>
                    </Link>
                    <Link to='/about_us'>
                        <li>About_us</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                    <Link to='/registration'>
                        <li>Registration</li>
                    </Link>
                </ul>
                </nav>
        )
    }
}
export default Nav;
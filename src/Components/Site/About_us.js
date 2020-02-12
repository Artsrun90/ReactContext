import React from 'react';
import s from "./body.module.css"
class Aboutus extends React.Component {
    render(){
        return(
            <div className={s.bg}>
                <h2>ABOUT US</h2>
                <button className={s.btn}>Submit</button>
            </div>
        )
    }
}

export default Aboutus;
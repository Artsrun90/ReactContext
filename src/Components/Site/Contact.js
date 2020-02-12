import React from 'react';
import s from "./body.module.css"
class Contact extends React.Component {
    render(){
        return(
            <div className={s.bg}>
                <h2>CONTACT</h2>
                <button className={s.btn}>Submit</button>                
            </div>
        )
    }
}

export default Contact;
import React from 'react';
import s from "./body.module.css"

class Portfolio extends React.Component {
    
    render(){
        return(
            <div className={s.bg}>
                <h2>PORTFOLIO</h2>
                <button className={s.btn}>Submit</button>
            </div>
        )
    }
}

export default Portfolio;
import React from 'react';
import s from "./body.module.css"
class Home extends React.Component {
    render(){
        return(
            <div className={s.bg}>
                <h2>HOME</h2>
                <button className={s.btn}>Submit</button>
            </div>
        )
    }
}

export default Home;
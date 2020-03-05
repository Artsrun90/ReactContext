import React from 'react';
// import s from "./body.module.css"
import Error from './ErrorCyrcle'
import Form from './Form'
import s from "./body.module.css"

class Registration extends React.Component {
    
    render(){
        return(
            <div className={s.bg}>
                  <Error>
                      <Form/>
                  </Error>
            </div>
        )
    }
}

export default Registration;
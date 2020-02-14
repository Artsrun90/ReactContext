import React from 'react';
// import s from "./body.module.css"
import Error from './ErrorCyrcle'
import Form from './Form'

class Registration extends React.Component {
    
    render(){
        return(
            <div>
                  <Error>
                      <Form/>
                  </Error>
            </div>
        )
    }
}

export default Registration;
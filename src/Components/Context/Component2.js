import React from 'react';
import {MyContext} from './App';
import Component3 from './Component3'

 
class Compoonent2 extends React.Component {
          render(){
              return(
                  <div style={{
                      border: "2px solid brown",
                      width: '200px',
                      margin: '10px auto',
                      padding: "20px",
                      textAlign: 'center'
                  }}>
                      <MyContext.Consumer>
                            {value => <h1>{value}</h1>}                          
                      </MyContext.Consumer>
                      <Component3/>
                      
                  </div>
              )
          }
}

export default Compoonent2;
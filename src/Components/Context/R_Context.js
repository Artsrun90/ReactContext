import React from 'react';
import Compoonent2 from './Component2';
import Component3 from './Component3'
class R_Context extends React.Component {
          render(){
              return(
                  <div style={{
                      border: "2px solid brown",
                      width: '300px',
                      margin: '150px auto',
                      padding: "20px",
                      textAlign: 'center'
                  }}>
                      <h1>React Context(</h1>
                      <Compoonent2 />
                      <Component3 />
                  </div>
              )
          }
}

export default R_Context;
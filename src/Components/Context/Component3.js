import React from 'react';

import {MyContext2} from './App'

class Component3 extends React.Component {
          render(){
              return(
                  <div style={{
                      border: "2px solid brown",
                      width: '200px',
                      margin: '10px auto',
                      padding: "0px",
                      textAlign: 'center'
                  }}>
                   
                      <MyContext2.Consumer>
                          {value => <h2>{value}</h2>}
                      </MyContext2.Consumer>
                  </div>
              )
          }
}

export default Component3;
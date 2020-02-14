import React from 'react';
import RContext from './R_Context';

<<<<<<< HEAD


export const MyContext = React.createContext("Sign Up")
=======
export const MyContext = React.createContext(25)
>>>>>>> 3ba96a0ae232c8a695952cadc2cb4e17c47ab73e
export const MyContext2 = React.createContext(25)

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stateValue: "Context",
            set: "dsv"            
        }
    }
    render(){
        return(
          <div>
              <MyContext.Provider value={this.state.stateValue}>
              <MyContext2.Provider value={this.state.set}>
                    <RContext />
              </MyContext2.Provider>                    
              </MyContext.Provider>
              
              
          </div>     
            
        )
    }
}

export default App;
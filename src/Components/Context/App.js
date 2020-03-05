import React from 'react';
import RContext from './R_Context';



export const MyContext = React.createContext("Sign Up")
// export const MyContext = React.createContext(25)
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
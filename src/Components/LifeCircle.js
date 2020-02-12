import React from "react";
import New from "./new";

class Lifes extends React.Component {
    constructor(props){
          console.log("constructor run")
          super(props);
          this.state = {

          }
    }

    componentWillMount(){
        console.log("componentWillMount")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    render(){
        console.log("rende run")
        return(
            <div>
                <New/>
            </div>
        )
    }
}

export default Lifes;
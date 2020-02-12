import React from "react";
import SuperF from "./superFunc";

class Supercomponent extends React.Component {
    render(){
        return(
            <div>
                <p>Supercomponent</p>
                <button onClick={this.props.handleChange}>Click</button>
            </div>
        )
    }
}

export default SuperF(Supercomponent);
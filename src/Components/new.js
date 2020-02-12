import React from "react";
// import Hotel from "./prop_Types";

class List extends React.Component {
    componentWillMount(){
        console.log("new componentWillMount")
    }

    componentDidMount(){
        console.log("new componentDidMount")
    }

render(){
    console.log("new render")
    return(
        <div>
           <p>Hello</p>  
        </div>
    )
}
}
export default List;
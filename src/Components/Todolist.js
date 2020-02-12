import React from "react";
import List from "./List";

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            text: ''
        }
        
    }
    render(){
        
        return(
            <div>
                <List items={this.state.items}/>
            </div>
        )
    }
}

export default TodoList;
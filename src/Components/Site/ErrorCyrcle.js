import React, {Component} from 'react';

class ErroeCyrcle extends Component {
    constructor(props){
        super(props);
       this.state = {
           myerror:false,
           errorMessage:""
       } 
    }

    componentDidCatch(error, info){
        this.setState({
            myerror:true,
            errorMessage:error.errorMessage
        })
    }
    render(){
        const {myerror} = this.state;
        if(myerror){
            return(
                <h1 style= {{color:'red'}}>errorMessage</h1>
            );
        }
        return this.props.children
    }
   
}

export default ErroeCyrcle;
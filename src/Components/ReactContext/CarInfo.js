import React, { Component } from 'react';
import {MyContext2} from './Cars'
class CarInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            carInfo:[
                "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
                "https://images.unsplash.com/photo-1530484567812-2d5a2d82268c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "https://st3.depositphotos.com/6748148/16906/i/1600/depositphotos_169062658-stock-photo-kyiv-ukraine-october-2017-soviet.jpg"
                 
             ]
        }
    }
    goToHomePage=()=>{
        this.props.history.push({
            pathname:"/cars"
        })
    }
    render() { 
        let carImg = "";
        if(this.props.match.params.name === "Audi"){
            carImg = this.state.carInfo[0];
        }else if(this.props.match.params.name === "Mazda"){
            carImg = this.state.carInfo[1];
        }else if(this.props.match.params.name === "Zapo"){
            carImg = this.state.carInfo[2];
        }
        return ( 
           
            <div style={{
            backgroundImage:`url("${carImg}")`,
            backgroundSize:'cover',
            height:'100vh', 
            textAlign:'center',
            paddingTop:'50px'}}>
                <h1 style={{color:"red",margin:'0'}}>{this.props.match.params.name}</h1>
                <button onClick={this.goToHomePage.bind(this)}>My Cars</button>
            </div>
         );
    }
}
 
export default CarInfo;
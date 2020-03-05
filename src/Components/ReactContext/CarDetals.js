import React, { Component } from 'react';
import s from "./car_detals.module.css";
import {withRouter} from 'react-router-dom';

class CarDetals extends Component {
    render() { 
        console.log("sa",this.props);
      
    return (      
        <div 
        className={s.carBox}
        onClick={()=> this.props.history.push('/cars/' + this.props.name.toLowerCase())}
    >                {console.log("hietori:" + this.props.history)}
            <h1> Name: {this.props.name}</h1> 
            <h4>Years:{this.props.year}</h4>           
        
        </div>
  
         );
    }
}
 
export default withRouter(CarDetals);
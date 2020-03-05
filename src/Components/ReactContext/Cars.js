import React, { Component } from 'react';
import CarDetals from "./CarDetals.js";
import s from "./car_detals.module.css";


export const MyContext2 = React.createContext();

class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cars:[
                {name: "Audi",year:2019},
                {name: "Mazda",year:2019},
                {name: "Zapo",year:1965},
            ]
         }
    }
    goToHomePage=()=>{
        this.props.history.push({
            pathname:"/"
        })
    }
    render() { 
         //console.log(this.props); //history...
        
        let auto = null;
        auto = this.state.cars.map( (car,index) => {
            return(
                <CarDetals 
                key={index}
                name={car.name}
                year={car.year}
                ind={index}
                />
            )
        })
        return ( 
            <div className={s.main}>
            <button onClick={this.goToHomePage.bind(this)}>Home page</button>
            <hr/>
                {auto}
            </div>
         );
    }
}
 
export default Cars;


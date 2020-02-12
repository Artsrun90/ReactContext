import React from "react";
import Hotel from "./prop_Types";

class List extends React.Component {
    state ={
        hoteldetails: {
        name: "Axababyan",
        boss: "BOSS",
        persons: 20,
        rooms: 5,
        busyrooms: 3,
        freerooms: ''
        }
    }
    render(){
        
        return(
            <div>
            <Hotel name={this.state.hoteldetails.name} 
            boss={this.state.hoteldetails.boss}
            persons={this.state.hoteldetails.persons}
            rooms={this.state.hoteldetails.rooms}
            busyrooms={this.state.hoteldetails.busyrooms}
            freerooms={this.state.hoteldetails.freerooms}
            />
            </div>
        )
    }
}

export default List;
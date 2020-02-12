import React from "react";
import PropTypes from 'prop-types';

class Hotel extends React.Component {
  
    render(){
             
    return(     
            <div>
                <h1>HotelName: {this.props.name}</h1>
                <h1>Boss: {this.props.boss}</h1>
                <h1>Persons: {this.props.persons}</h1>
                <h1>Rooms: {this.props.rooms}</h1>
                <h1>Busyrooms: {this.props.busyrooms}</h1>
                <h1>Freerooms: {this.props.freerooms}</h1>
                
            </div>  
    )
}
}



Hotel.propTypes = {
    name: PropTypes.string.isRequired,
    boss: PropTypes.string.isRequired,
    persons: PropTypes.number.isRequired,
    rooms: PropTypes.number.isRequired,
    busyrooms: PropTypes.number.isRequired,
    freerooms: PropTypes.number.isRequired
 
}

export default Hotel;
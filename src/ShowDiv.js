import React, {Component} from 'react';
import MyCar from './Car';

class App extends Component {
    state = {
        cars: [
            {name: "Audi"},
            {name: "Honda"},
            {name: "BMW"}
        ],
        showdiv: false
    }
    deleteComponent(index){
        let cars = this.state.cars.concat()
    }
    changValue=()=>{
        this.setState({
            showdiv: !this.state.showdiv
        })
    }

render(){
    let car = null;
    if(this.state.showdiv){
        car = this.state.cars.map((car, index)=>{
            return(
                <MyCar
                key={index}
                name={car.name}
                onDelete = {this.deleteComponent.bind(this, index)}
                changeName = {event=> this.changeName(event.target.value, index)}
                />
            )
        })

    }
    return(
         <div>
             {car}
              <button onClick={this.changValue}>Show Components</button>
         </div>
    )
}
}
export default App;
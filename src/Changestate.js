import React, {Component} from 'react';
import Car from './Car';
class App extends Component {
    state = {
        cars: [
            {name: "Audi"},
            {name: "Honda"},
            {name: "BMW"}
        ],
        pageTitle: "Title",
        showcontent: false
    }
   
   showDiv = () => {
       this.setState({
           showcontent: !this.state.showcontent
       })
   }
    handleClik=(e)=>{
             this.setState({
                pageTitle: e
             })
    }
    render() {
        // const cars = this.state.cars;
        return (
            <div>
                
                <h1>{this.state.pageTitle}</h1>
                { this.state.showcontent ? 
                this.state.cars.map((car,index) => {
                    return (
                   <Car 
                   key = {index}
                   name = {car.name}
                   changehandle = {this.handleClik.bind(this,car.name)}
                   />
                    )
                }): null}
              <button onClick={this.showDiv}>Show</button>
            </div>
        )
    }
}

export default App;
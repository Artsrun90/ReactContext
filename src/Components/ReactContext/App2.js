import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./Home";
import Nav from "./Nav";
import About   from "./About";
import Blog from "./Blog";
import Cars from "./Cars";
import CarInfo from './CarInfo';
// export const MyContext = React.createContext("Register Form");

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { isOpen: false }
		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	}
	render() {
		let err = <h1 style={{color:"red",textAlign:"center"}}>404 Page not found</h1>;
		return (
		<BrowserRouter>
            <Nav/>
				<Switch>
            <Route path="/" exact component={Home}/>
			<Route path="/about" render={(props) => <About {...props} isAuthed={true} title={"About page with props"} name={this.state.isOpen ? "Hide" : "Show"} toggle={this.toggle} />}/>
            <Route path="/blog" component={Blog}/> 
            <Route path="/cars/:name" component={CarInfo}/> 
            <Route path="/cars" component={Cars}/> 
            <Route render={()=> err }/>  
			{/* <Redirect to={'/'}/> */}
				</Switch>
        </BrowserRouter>
		);
	}
}

export default App;
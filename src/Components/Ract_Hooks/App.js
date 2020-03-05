import React, { Component } from 'react';
import Users from "./Users";
import MyHooksComponent from './UserWuthHooks';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			name:"Sebastian"
		 }
	}
	render() { 
		return ( 
			<div>
				<Users/>
				<hr/>
				<MyHooksComponent name={this.state.name}/>
			</div>
		 );
	}
}
 
export default App;
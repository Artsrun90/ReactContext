import React, { Component } from 'react';


class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Sebastian",
			surname:'Rodriges',
			window:window.innerWidth,
		}
		this.handleChange.bind(this);
		this.handleSubmit.bind(this);
		this.resizeWidth.bind(this);
	}

	handleSubmit = (e) => {
		e.preventDefault();
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	resizeWidth = () => {
		this.setState({
			width: window.innerWidth,
		})
	}
		componentDidMount(){
			document.title = this.state.name + ' ' + this.state.surname;
			window.addEventListener('resize', this.resizeWidth)
		}
		componentDidUpdate(prevProps,prevState){
			
			// console.log("prevState", prevState);
			// console.log("prevProps", prevProps);	
		}
		componentWillUnmount(){
			window.removeEventListener('resize', this.resizeWidth);
		}
	render() {
		return (
			<>
				<h3 style={{ marginLeft: "150px" }}>In React 16.8</h3>
				<form onSubmit={this.handleSubmit} style={{ marginLeft: "150px" }}>
					<div>
						<input
							type="text"
							value={this.state.name}
							name="name"
							onChange={this.handleChange} />
					</div>
					<div>
						<input
							type="text"
							value={this.state.surname}
							name="surname"
							onChange={this.handleChange} />
					</div>
					<div>
						<input
							type="submit"
							value={this.state.submit}
							 />
					</div>
					<p>Width:{this.state.width}</p>
					</form>
			</>
		);
	}
}

export default Users;
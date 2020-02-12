import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Blog from "./Blog";
import About_us from "./About_us";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Nav from "./Nav";
import Registration from './Registration';

class App extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     ifclick: true
//         // };
//         // this.handleToggleClick = this.handleToggleClick.bind(this);
//       }

// //       handleToggleClick(){
// //     this.setState({
// //         ifclick: !this.state.ifclick
// //       });
// // }

    render(){      
        return(            
            <Router>               
                <Nav/>                              
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/portfolio' component={Portfolio}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/about_us' component={About_us}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/registration' component={Registration}/>
                </Switch>                                
            </Router>          
        )
    }
}

export default App;

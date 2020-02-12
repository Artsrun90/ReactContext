import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './About';
import Home from './Home';
import Blog from './Blog';
import Nav from './Menu'


class App extends React.Component {
    render(){
  return (  
        <Router>
             <Nav/>
               <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/blog" component={Blog}/>
               </Switch>             
        </Router>    
  )
    }
}

export default App;
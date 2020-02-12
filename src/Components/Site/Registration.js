import React from 'react';
import s from "./body.module.css"

class Registration extends React.Component {
    state = {
        login: "",
        password: "",
        error: "",
        countError: ""
    }

    validate = () =>{
        let error = "";
        let countError = "";
              
        if(this.state.login === "" || this.state.password === "" || this.state.login.length > 10 || !this.state.password.match(/[1-9]/g)){
            error = "login or password is not valid";
            let count = 0;
            count++; 
            if(count > 3) {
                countError = "Is it you?";            
            } 
            if(countError){
                this.setState({countError});
                return false;
            }
                    
        }
        
        
          
        if(error){
            this.setState({error});
            return false;
        }

        return true;
    }

    handleSubmit = (event) => {
    event.preventDefault();
    let valid = this.validate();
    
       if(valid){
           this.setState({error: ""})
           console.log(this.state)
       }
    }

    handlechange = (event) => {
    
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){
        return(
            <div className={s.bgF}>
                   <h2>Sign Up</h2>  
            
            <form onSubmit={this.handleSubmit.bind(this)}>
                
               <div>
                   <input className={s.inp}
                   type="text"
                   name="login"
                   value={this.state.login}
                   placeholder="Enter your Login"
                   onChange={this.handlechange.bind(this)}
                   />
               </div>
               <div>
                   <input className={s.inp}
                   type="password"
                   name="password"
                   value={this.state.password}
                   placeholder="Enter your Password"
                   onChange={this.handlechange.bind(this)}
                   />
                   </div>
                   <div className={s.err}>{this.state.error}</div>
                   <div className={s.err}>{this.state.countError}</div>
               <div>
                   <input className={s.inputReg}
                   type="submit"
                   value={"Sign Up"}
                   onChange={this.handlechange.bind(this)}
                   />
                   </div>
            </form>
            </div>
        )
    }
}

export default Registration;
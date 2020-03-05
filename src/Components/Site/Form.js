import React from 'react';
import { MyContext } from '../Site/App';
import s from '../ReactContext/style.module.css'

class Form extends React.Component { 
    
    faceControl = (name, value) => {
        if (value) {
            if (name === "password" && value.length < 8) {
                throw new Error(`"-y shat karj e"${name}-i hamar`)
            }
            if (value.length <= 5) {
                throw new Error(`"${value}"-y shat karj e "${name}"-i hamar`)
            }
            return true;
        }
    }
    
    handleChange = (event) =>{
        let e = event.target.name;
        let value = event.target.value;
        switch (e) {
          case "name":
                this.faceControl(e, value)
                break;
          case "surname":
                this.faceControl(e, value)
                break;
          case "password":
                this.faceControl(e, value)
                break;
          case "email":
                this.faceControl(e, value)
                break;                        
            default:
                console.log("anhamatexeli anun")
                break;
        }
    }

    handleSubmit=(e)=>{
        debugger
        e.preventDefault()
    }

    
    render(){
        return(
            <div>                       
            <form className={s.myform} onSubmit={this.handleSubmit.bind(this)} autoComplete="off">
            <MyContext.Consumer>
                {value => <h2  style={{ marginTop: "-130px", fontSize: "40px", color: "#C11C14" }}>{value}</h2>}
            </MyContext.Consumer>
               <div>
                   <label htmlFor="name">First name</label>
                   <input 
                   id="name"
                   name="name"                   
                   placeholder="Enter your name"
                   type="text"
                   onBlur={this.handleChange.bind(this)}
                   />
               </div>
               <div>
                   <label htmlFor="surname">Last name</label>
                   <input 
                   id="surname"
                   name="surname"                   
                   placeholder="Enter your surname"
                   type="text"
                   onBlur={this.handleChange.bind(this)}
                   />
                </div>
                <div>
                   <label htmlFor="password">Password</label>
                   <input 
                   id="password"
                   name="password"                   
                   placeholder="Enter your password"
                   type="text"
                   onBlur={this.handleChange.bind(this)}
                   />
                </div>
                <div>
                   <label htmlFor="email">Email</label>
                   <input 
                   id="email"
                   name="email"                   
                   placeholder="Enter your email"
                   type="text"
                   onBlur={this.handleChange.bind(this)}
                   />
                </div>
                <input 
                type="submit"
                value="Sign Up"
                />
                                   
            </form>
         </div>
        );
    }
}

export default Form;
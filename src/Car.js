import React from 'react';

export default (props) => (

<div> style={{
    width: "50%",
    border: '1px solied'
}}
    <h1>Car: {props.name} </h1>
    <input type="text" onChange={props.changeName} value={props.name}/>
    <button onClick={props.onDelete}>Delete</button>
    {/* {props.children}
    <p>Color: {props.color}</p> */}
</div>

)
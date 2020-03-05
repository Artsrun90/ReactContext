import React, { useState,useEffect } from 'react';

export default function MyHooksComponent(props){

    useEffect(() => {
		document.title = `${name.value} ${surname.value}`;
    })
    
    const name = useChaneInput("Sebastian");
	const surname = useChaneInput("Rodriges");
    const width = useHook();
    
    return ( 
		<>
			<h3 style={{ marginLeft: "150px" }}>Works with Hooks</h3>
			<form style={{ marginLeft: "150px" }}>
				<div >
					<input {...name}/>
				</div>
				<div>
					<input {...surname} />
				</div>
				<p>Width:{width}</p>
			</form>
		</>
	 );
}

function useHook(){
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const resizeWidth = () => setWidth(window.innerWidth);
		window.addEventListener('resize', resizeWidth)
		//remove Effect
		return () =>{
			window.removeEventListener('resize', resizeWidth);
		}
	})
	return width;
}

function useChaneInput(defaultArg){
    const [value, setValue] = useState();
    function handlechang(event){
        setValue(event.target.value);
    }
    return {
        value,
        onChange:handlechang
    }
}
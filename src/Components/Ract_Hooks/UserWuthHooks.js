import React, { useState,useEffect } from 'react';
// Հուկերը ցիկլերի և if-րի մեջ օգտագործել չի կարելի
// X this.state
// X this.setState()
// X handleChangeName.bind(this)
export default function MyHooksComponent(props){

	// const myState = useState(props.name);
	// let name = myState[0];
	// let setName = myState[1];

	// const myState2 = useState("Rodriges");
	// let surname = myState2[0];
	// let setsurName = myState2[1];


	// X componentDidUpdate()
	// useEffect()-կաշխատի և կկանչի իր մեջի ֆունկցիան ամեն մի props, state փոփոխության, update-ից հետո, կապ չունի
	// []-  Կաշխատի միայն մեկ անգամ
	useEffect(() => {
		document.title = `${name} ${surname}`;
	})

	

	const [name,setName] = useState("Sebastian");
	const [surname, setsurName] = useState("Rodriges");
	const width = useHook();

	function handleChangeName(event){
		console.log("1");
		setName( event.target.value);
	}
	function handleChangeSurname(event) {
		console.log("2");
		setsurName(event.target.value);
	}



	return ( 
		<>
			<h3 style={{ marginLeft: "150px" }}>Works with Hooks</h3>
			<form style={{ marginLeft: "150px" }}>
				<div >
					<input
						type="text"
						value={name}
						onChange={handleChangeName} />
				</div>
				<div>
					<input
						type="text"
						value={surname}
						onChange={handleChangeSurname} />
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

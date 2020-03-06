import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Compon2() {
  const [user, setUser] = useState([]);
  const [usersort, setUsersort] = useState([]);
  const [inputtext, setInputtext] = useState();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      // console.log(res)
      setUser(res.data)
    })
  }, []);

  function sortUsers() {
    user.map(item => {
      if (item.username === inputtext) {        
        setUsersort([...usersort, item]) // usersorti-ին push է անում նոր item արժեքը
      }
      console.log("usersort: " + usersort.length)
      return usersort;
    })
  }

  function handleChange(event){
    let value = event.target.value;
    setInputtext(value);
  }

  return (
    <div>
      <input 
      type="text"
      onBlur={handleChange}
       />
      <button onClick={sortUsers}>Sort</button>
      {/* {console.log("usersort: " + usersort)}       */}
      <ul>
      {usersort.map(item => (
        <li key={item.id}>
          <p>{item.username}</p>
        </li>
      ))}
    </ul>
    </div>
  );
}
export default Compon2;



  // useEffect( () => {
  //   const fetchData = async () => {
  //   const res = await axios(
  //     'http://localhost:3001/customers',
  //   );
  //   setData(res);
  //   console.log(res)
  // };
  // fetchData();
  // }, []);

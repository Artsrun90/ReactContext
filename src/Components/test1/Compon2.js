import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Compon2() {
  const [db, setData] = useState({ data: [] });
  debugger
  useEffect( () => {
    const fetchData = async () => {
    const res = await axios(
      'https://jsonplaceholder.typicode.com/users',
    );
    setData(res);
    console.log(res)
  };
  fetchData();
  }, []);

  return (
      
    <ul>
      {db.data.map(item => (
        <li key={item.id}>
          <a>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
export default Compon2;
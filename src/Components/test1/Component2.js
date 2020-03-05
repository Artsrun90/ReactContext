import React, { useState, useEffect} from 'react';
import Axios from 'axios';

const Testcomp2 = () =>{
    
    const post = useChanePost();
    const respons = useGetPosts();
    useEffect(){
    Axios.
    }
    return(
        <div>

        </div>
    )
}
function useChanePost(){
    const [value, setValue] = useState();
    function handlechang(){
        setValue();
    }
    return {
        value,
        onChange:handlechang
    }
}

export default Testcomp2;

import React, { useState} from 'react';

const Testcomp2 = () =>{
    
    const post = useChanePost();
    const respons = useGetPosts();
    
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

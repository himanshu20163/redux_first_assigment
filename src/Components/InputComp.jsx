import React, { useState } from 'react'
import mystore from '../Redux/Store'
import { useSelector } from 'react-redux';

const InputComp = () => {
    const[data,setdata] = useState(" ");

    const calldispatch = () => {
        mystore.dispatch({
            type:"name",
            username:data,
        });
    };

    const fullname = useSelector((mystore)=>{
        return mystore;
    })

  return (
    <div>
        <h1>Enter the name</h1>
        <input type='text' placeholder='enter the numbers' onChange={(e)=>{
           setdata(e.target.value);
        }}/>
        <button onClick={calldispatch}>Submit</button>
        <p>{fullname.name}</p>
    </div>
  )
}

export default InputComp
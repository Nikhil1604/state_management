import React from 'react'
import { useEffect,useState } from 'react'
const EffectHook = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1)
        },1000)
    }
    )
    const myComponent={
        marginTop:'20px 10px', 
        textAlign:'center',
        backgroundColor:'darkgray',
        padding:'20px 20px',
        color:'white',
    }

    return (
    <div style={myComponent}>
        <h1> Count will increse with timer</h1>
        <h2>I am making use of useEffect here </h2>
        <h3>{count}</h3>
    </div>
  )
}

export default EffectHook
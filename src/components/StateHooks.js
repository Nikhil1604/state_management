import React,{useState} from 'react'

const StateHooks = () => {
    const [count,setCount]=useState(0)

    function increment () {
        setCount(count+1)
    }
    function decrement () {
        setCount(count-1)
    }
    function reset () {
        setCount(0)
    }

    const myButton={
        padding:'20px 20px',
        width:'25%',
        margin:'20px auto'

    }

    const myComponent={
        marginTop:'10px',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'darkgray',
        paddingTop:'20px',
        color:'white'
    }
    return (
    <div style={myComponent}>
        <h1>This is a State Management using useState Hook</h1>
        <button onClick={increment} style={myButton}>Increment</button>
        <button onClick={decrement} style={myButton}>Decrement</button>
        <button onClick={reset} style={myButton}>Reset</button>
        <h1>{count}</h1>
    </div>
  )
}

export default StateHooks
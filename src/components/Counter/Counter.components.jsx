import './Counter.components.css'
import React, {useState} from 'react'





function NumCounter(){
    var [count, setCount] = useState(0)
    console.log(count)
    

    function increase(){
        setCount(count++)
    }

    function decrease(){
        setCount(count--)
    }

    return (
        <div className='container'>
        <h1>{count}</h1>
        <div className='counters'>
            <button className='minus' onClick={decrease}>-</button>
            <button className='add' onClick={increase}>+</button>
            
        </div>
 

        </div>
    )


}

export default NumCounter
import { useState } from 'react'

const Counter = ({initial = 1}) => {
    let [count, setCount] = useState(initial);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export default Counter
'use client';

import {ReactElement, useState, useEffect} from "react";

export default function Counter():ReactElement {
    const [counter,setCounter] = useState(0);

    useEffect(()=> {console.log('마운트')}, [counter]);

    //todo: useCallback?

    return (
        <>
            <button className='p-3 bg-gray-300 m-3' onClick={() => setCounter((prev) => prev + 1)}>+</button>
            <p>{counter}</p>
        </>
    );
}
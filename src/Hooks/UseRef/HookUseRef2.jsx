import React, { useRef, useState } from 'react'

// To hold the previous value before render....
export default function HookUseRef2() {

    const [name, setName] = useState('')
    const prevName = useRef();

    console.log("name : " + name);
    console.log("prevName : " + prevName.current);

    const handleChange = (e) => {
        setName(e.target.value);
        prevName.current = name;
    }

    console.log("name : " + name);
    console.log("prevName : " + prevName.current);


    return (
        <>
            <input type="text" value={name} onChange={handleChange} />
            <p>My name is {name} and it is used to be {prevName.current} </p>
        </>
    )
}

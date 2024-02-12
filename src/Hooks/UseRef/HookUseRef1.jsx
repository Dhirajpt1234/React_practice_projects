import React, { useState } from 'react'
import { useRef } from 'react'


//to make focus on particular element.

export default function HookUseRef1() {
    const [count, setCount] = useState(() => 0);

    const handleOnClick = () => {
        inputRef.current.focus();
    }

    const inputRef = useRef();
    return (
        <>

            <input ref={inputRef} type="number" value={count} />
            <p onClick={handleOnClick}>This is the text to click on .</p>
            <button >Click me</button>

        </>
    )
}

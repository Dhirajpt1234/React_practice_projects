import React, { useEffect, useRef, useState } from 'react'

// To have the render count.
export default function HookUseRef3() {

    const [name, setName] = useState("")

    let renderCount = useRef(1);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    }, [name])


    return (
        <>
            <input type="text" value={name} onChange={handleChange} />
            <p>The component rendered {renderCount.current} times</p>
        </>
    )
}

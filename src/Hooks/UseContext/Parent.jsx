import React, { useState , ThemeContext } from 'react'
import Child from './Child'

const Parent = () => {

    const [theme, setTheme] = useState("light")

    return (

        <ThemeContext.provider value={{ theme, setTheme }} >

            <Child />

        </ThemeContext.provider>

    )
}

export default Parent
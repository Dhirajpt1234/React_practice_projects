import React, { useContext } from 'react' 

const GrandChild = () => {

  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>

      <button >Click me</button>

    </div>
  )
}

export default GrandChild
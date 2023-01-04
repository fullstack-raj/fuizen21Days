import React, { useContext } from 'react'
import ThemeContext from '../../Context/ThemeContext'

const Settings = () => {
    const { theme, setTheme } = useContext(ThemeContext);
   // const { user, setUser } = useContext({name:'Raj', age:'20'});

    return (
        <div style={{backgroundColor:theme}}>
            <h1>{theme}</h1>
            <button onClick={() => setTheme('#6aff00')}>Change Theme</button>
        </div>
    )
}

export default Settings
import React, { useState } from 'react'
import { useEffect } from 'react';
import ThemeContext from './ThemeContext'

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('#ed0303');

    useEffect(() =>{
        
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
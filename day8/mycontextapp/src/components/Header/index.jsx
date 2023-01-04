import React, { useContext } from 'react'
import ThemeContext from '../../Context/ThemeContext'

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>{theme} - header</div>
  )
}

export default Header
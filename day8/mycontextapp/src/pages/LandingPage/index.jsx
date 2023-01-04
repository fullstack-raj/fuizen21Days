import React, { useContext } from 'react'
import Header from '../../components/Header'
import ThemeContext from '../../Context/ThemeContext'

const LandingPage = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div style={{backgroundColor:theme}}>LandingPage
    <Header />
    </div>
  )
}

export default LandingPage
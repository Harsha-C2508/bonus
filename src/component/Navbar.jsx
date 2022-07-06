import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContex'
import Styles from '../component/navbar.module.css';

const Navbar = () => {
    const {isLight,toggleTheme} = useContext(ThemeContext)
  return (
    <div className={Styles.box}>
      <h1 className={Styles.h1}>My Dashboard</h1>
        <button 
            className={Styles.button} 
            onClick={toggleTheme}>
              {`Mode ${
                isLight ? "Dark":"Light"
              }`}</button>
    </div>
  )
}

export default Navbar
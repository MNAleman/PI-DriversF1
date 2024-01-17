import React from 'react'
import "../../Styles/styles.css"
import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <div className='navbar-cont'>
      <div className='navbar-cont-img'>
        
        <Link className="navbar-link" to="/"><img src="https://rtrsports.com/wp-content/uploads/2023/06/346787536_6242287572558786_8800473780209347755_n_grande.webp" alt="logo" /></Link>
      </div>
      <div className='navbar-cont-links'>
        <Link className="navbar-link" to="/home">Home</Link>
        <Link className="navbar-link" to="/create">Formulario</Link>
      </div>
      <div className='navbar-cont-search'>
        <input type="text" name="" id="" />
        <input type="submit" value="Buscar" />
      </div>
    </div>
  )
}

export default NavBar
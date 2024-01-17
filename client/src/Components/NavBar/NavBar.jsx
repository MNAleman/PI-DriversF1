import React from 'react'
import { Link } from "react-router-dom"
import "../../Styles/styles.css"
import SearchBar from '../SearchBar/SearchBar'
import { useDispatch } from 'react-redux'
import { restart } from '../../Redux/Actions/actions'
const NavBar = () => {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(restart())
  }

  return (
    <div className='navbar-cont'>
      <div className='navbar-cont-img'>
        
        <Link className="navbar-link" to="/"><img src="https://rtrsports.com/wp-content/uploads/2023/06/346787536_6242287572558786_8800473780209347755_n_grande.webp" alt="logo" /></Link>
      </div>
      <div className='navbar-cont-links'>
        <Link className="navbar-link" onClick={reset} to="/home">Home</Link>
        <Link className="navbar-link" to="/create">Formulario</Link>
      </div>
      <div className='navbar-cont-search'>
        {/* <input type="text" name="" id="" />
        <input type="submit" value="Buscar" /> */}
        <SearchBar/>
      </div>
    </div>
  )
}

export default NavBar
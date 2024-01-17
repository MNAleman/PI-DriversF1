import React, { useEffect } from 'react'
import Cards from '../../Components/Cards/Cards.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { changePage, getDriver } from '../../Redux/Actions/actions.js'

const Home = () => {

  const dispatch = useDispatch();

  const allDrivers = useSelector(state => state.allDrivers)
  const currentPage = useSelector(state => state.currentPage)

  useEffect(() => {
    dispatch(getDriver())
  }, [])

  const pagination = (event) =>{
    dispatch(changePage(event.target.name))
  }


  return (
    <div>
      
    <div className='home-p-n-buttons'>
      <button className="direction-btn" onClick={pagination } name='prev'>{"<<"}</button>
      <span>  {currentPage + 1}  </span>
      <button className="direction-btn"onClick={pagination } name='next'>{">>"}</button>
    </div>
      <div className='home-cont'>
      <Cards info={allDrivers}></Cards>
    </div>
    </div>
  )
}

export default Home



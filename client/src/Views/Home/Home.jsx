import React from 'react'
import Cards from '../../Components/Cards/Cards.jsx'
function Home(){
  const arr = [{
  name: "Juan Manuel",
  lastName: "Fangio",
  description: "Fue el mejor corredor te toda la historia de todos los tiempos",
  image: "laURLqueTieneLaFotoDeJMFangio.jpg",
  nationality: "Argentino",
  birthdate: "1911-06-24",
  teams: ["Alfa Romeo", "Maserati", "Mercedes", "Ferrari"]
  
  }]


  return (
    <div className='home-cont'>
      <Cards info={arr}></Cards>
    </div>
  )
}

export default Home



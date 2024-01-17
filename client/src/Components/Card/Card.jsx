import React from 'react'

const Card = ({name, lastName, description, image, nationality, birthdate, teams}) => {
  return (
    <div className='card-cont'>
      <div className='card-cont-title'>
      <h2>{name} {lastName}</h2>      
    </div>
    <div className='card-cont-info'>
      <label>Description: </label>
      <span>{description}</span>
      <br/>
      <label>Nationality: </label> 
      <span>{nationality}</span>
      <span>{birthdate}</span>
      <span>{teams}</span>
      </div>
      </div>
  )
}

export default Card


// [{
//   "name": "Juan Manuel",
//   "lastName": "Fangio",
//   "description": "Fue el mejor corredor te toda la historia de todos los tiempos",
//   "image": "laURLqueTieneLaFotoDeJMFangio.jpg",
//   "nationality": "Argentino",
//   "birthdate": "1911-06-24",
//   "teams": ["Alfa Romeo", "Maserati", "Mercedes", "Ferrari"]
  
//   }]
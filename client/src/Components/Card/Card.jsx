import React from 'react'

const Card = ({ name, lastName, image, nationality, birthdate, teams }) => {
  return (
    <div className='card-cont'>
      <div className='card-cont-title'>
        <h2>{name} {lastName}</h2>
      </div>
      <div className='card-cont-info'>
        {/* <label>Description: </label>
      <span>{description}</span> */}
        <br />
        <div className='card-cont-img'>
          <img src={image} alt= "driver"/>
        </div>
        <br />
        <label>Nationality: </label>
        <span>{nationality}</span>
        <br />
        <label>Birthdate: </label>
        <span>{birthdate}</span>
        <span>{teams}</span>
      </div>
    </div>
  )
}

export default Card



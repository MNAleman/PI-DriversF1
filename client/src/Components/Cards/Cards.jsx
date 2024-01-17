import React from 'react'
import Card from '../Card/Card'
const Cards = ({ info }) => {
  return (
    <div className='cards-cont'>
      {
        info.map(d => <Card key={d.id} name={d.name} lastName={d.lastName}image={d.image} nationality={d.nationality} birthdate={d.birthdate}  />)
      }
    </div>
  )
}

export default Cards

// description={d.description} 
//teams={d.teams}
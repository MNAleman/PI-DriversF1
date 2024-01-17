import React from 'react'
import Card from '../Card/Card'
const Cards = ({ info }) => {
  return (
    <div className='cards-cont'>
      {
        info.map(d => <Card key={d.name} name={d.name} lastName={d.lastName} description={d.description} image={d.image} nationality={d.nationality} birthdate={d.birthdate} teams={d.teams} />)
      }
    </div>
  )
}

export default Cards


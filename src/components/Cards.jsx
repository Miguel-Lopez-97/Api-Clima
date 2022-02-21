import React from 'react'
import Card from './Card'

export default function Cards (props) {
  const { cities, onClose } = props

  return (
    <div className='containerCards'>
      {cities &&
        cities.map(city => (
          <Card
            key={city.id}
            data={city}
            onClose={() => onClose(city.id)}
          />
        ))}
    </div>
  )
}

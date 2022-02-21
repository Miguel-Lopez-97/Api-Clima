import React from 'react'
import Card from './Card'

export default function Cards (props) {
  const { cities, onClose } = props

  return (
    <div>
      {cities &&
        cities.map(city => (
          <Card
            key={city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
          />
        ))}
    </div>
  )
}

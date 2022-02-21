import React, { useState } from 'react'
import "./card.css"

export default function SearchBar ({onSearch}) {
  const [city, setCity] = useState('')

  const handleChange = event => {
    event.preventDefault()
    onSearch(city)
    setCity("")  
  }
  return (
    <form
      onSubmit={handleChange}>
        <h3>Find the Weather City</h3>
      <div className='searchBar'>
      <input
        type='text'
        placeholder='City...'
        value={city}
        onChange={event => setCity(event.target.value)}
      />
      <input type='submit' value='Add' />
      </div>
    </form>
  )
}

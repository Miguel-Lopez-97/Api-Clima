import React, { useState } from 'react'

export default function SearchBar ({ onSearch }) {
  const [city, setCity] = useState('')

  const handleChange = event => {
    event.preventDefault()
    onChange(city)
    setName("")  
  }
  return (
    <form
      onSubmit={handleChange}>
      <input
        type='text'
        placeholder='Ciudad...'
        value={city}
        onChange={event => setCity(event.target.value)}
      />

      <input type='submit' value='Add' />
    </form>
  )
}

import React, { useState } from 'react'

export default function SearchBar ({ onSearch }) {
  const [city, setCity] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSearch(city)
      }}
    >
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

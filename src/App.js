import React, { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'

function App () {
  const [cities, setCities] = useState([])

  function onSearch (city) {
    const apiKey = '9ec47a8150e44e6385aae05be36f9e11'
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then(response => response.json())
      .then(res => {
        if (res.main !== undefined) {
          const cityNew = {
            min: Math.round(res.main.temp_min),
            max: Math.round(res.main.temp_max),
            img: res.weather[0].icon,
            id: res.id,
            country: res.sys.country,
            wind: res.wind.speed,
            temp: Math.round(res.main.temp),
            name: res.name,
            weather: res.weather[0].main,
            description: res.weather[0].description,
            lat: res.coord.lat,
            lon: res.coord.lon
          }
          setCities(cities.find(e=>e.id===cityNew.id)?oldCities => [...oldCities]:oldCities => [...oldCities, cityNew])
        } else {
          alert('Ciudad no encontrada')
        }
      })
  }

  const onClose = cityId => {
    setCities(oldCities => oldCities.filter(city => city.id !== cityId))
  }


  return (
    <div className='App'>
        <SearchBar onSearch={onSearch} />
        <Cards cities={cities} onClose={onClose} />
    </div>
  )
}

export default App;

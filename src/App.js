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
            wind: res.wind.speed,
            temp: res.main.temp,
            name: res.name,
            weather: res.weather[0].main,
            clouds: res.clouds.all,
            latitud: res.coord.lat,
            longitud: res.coord.lon
          }
          setCities(oldCities => [...oldCities, cityNew])
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
      <hr />
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <hr />
      <div>
        <Cards cities={cities} onClose={onClose} />
      </div>
    </div>
  )
}

export default App;

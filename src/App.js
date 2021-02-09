import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import MainCard from './components/MainCard'
import axios from 'axios'
import './App.css'

const api_key = process.env.REACT_APP_API_KEY

const App = () => {

    const [weatherData, setWeatherData] = useState(0)
    const [cityInput, setCityInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const getData = event => {
        event.preventDefault()
        setWeatherData(0)
        setIsLoading(true)
        let weatherURL = `https://dry-cliffs-62970.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${api_key}`;
        axios.get(weatherURL)
        .then(res => {
            setWeatherData(res)
            setIsLoading(false)
        })
        console.log(weatherData)
        }

    const handleInput = event => {
      let input = event.target.value
        setCityInput(input)
    }

  return (
    <div>
      <h1 className='app-title'>CURRENTLY˚</h1>
      <Search handleInput={handleInput} data={getData} />
        <div className='content-div'>
          <p style={{marginTop: '2rem'}}>{isLoading ? `loading...` : null}</p>
          {weatherData === 0 ? null : <MainCard weatherData={weatherData} />}
        </div>
    </div>
  )
}

export default App
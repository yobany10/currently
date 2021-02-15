import React from 'react'
import { useMediaQuery } from "@material-ui/core"
import './MainCard.css'

const MainCard = props => {
    // variable for using a media query
    const isNavSm = useMediaQuery('(max-width: 599px)')

    const fromKtoF = kelvin => {
        return Math.round((((kelvin - 273.15) * (9/5)) + 32))
    }

    const mpsToMph = speed => {
        return Math.round(speed * 2.237)
    }

    let cityName = props.weatherData.data.name
    let currentTemp = fromKtoF(props.weatherData.data.main.temp)
    let tempHigh = fromKtoF(props.weatherData.data.main.temp_max)
    let tempLow = fromKtoF(props.weatherData.data.main.temp_min)
    let weatherDescription = props.weatherData.data.weather[0].description
    let windSpeed = mpsToMph(props.weatherData.data.wind.speed)
    let weatherIcon = props.weatherData.data.weather[0].icon

    return (
        <div className='main-card-div'>
            <h2 className='main-card-title'>{cityName}</h2>
            <h1 className='main-card-temp'>{`${currentTemp} F˚`}</h1>
            <p className='main-card-temp-high'>{`High: ${tempHigh} F˚`}</p>
            <p className='main-card-temp-low'>{`Low: ${tempLow} F˚`}</p>
            <div className={isNavSm ? 'main-card-weather-sm' : 'main-card-weather-lg'}>
                <img className='main-card-weather-icon' src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} />
                <p className='main-card-description'>{`${weatherDescription}`}</p>
            </div>
            <p className='main-card-wind'>{`Wind Speed: ${windSpeed} mph`}</p>
        </div>
    )
}

export default MainCard
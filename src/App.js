import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import MainCard from './components/MainCard'
import News from './components/News'
import axios from 'axios'
import { useMediaQuery } from "@material-ui/core"
import './App.css'

const api_key_weather = process.env.REACT_APP_API_KEY_WEATHER
const api_key_news = process.env.REACT_APP_API_KEY_NEWS

const App = () => {

  // variable for using a media query
  const isNavSm = useMediaQuery('(max-width: 775px)')

    const [weatherData, setWeatherData] = useState(0)
    const [newsData, setNewsData] = useState(0)
    const [cityInput, setCityInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // on click
    const getData = event => {
        event.preventDefault()
        setIsLoading(true)
          getWeather()
          getNews()
        setIsLoading(false)
    }
    // on click

    // weather
    const getWeather = () => {
        let weatherURL = `https://dry-cliffs-62970.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${cityInput},US&appid=${api_key_weather}`;
        axios.get(weatherURL)
        .then(res => {
            setWeatherData(res)
        }).catch((error) => {
          console.log(error)
        })
        console.log(weatherData)
    }
    //weather
    
    // news
    var options = {
      method: 'GET',
      url: 'https://dry-cliffs-62970.herokuapp.com/api.datanews.io/v1/news',
      params: {q: `${cityInput} local`, from: '2021-02-01', to: '2021-02-15', language: 'en'},
      headers: {'Content-Type': 'application/json', 'x-api-key': `${api_key_news}`}
    };

    const getNews = () => {
      axios.request(options)
      .then(function (response) {
        setNewsData(response.data)
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
    // news

    const handleInput = event => {
      let input = event.target.value
        setCityInput(input)
    }

  return (
    <div>
      <h1 className='app-title'>CURRENTLY˚</h1>
      <Search handleInput={handleInput} data={getData} />
      <p style={{marginTop: '2rem'}}>{isLoading ? `loading...` : null}</p>
        <div className={isNavSm ? 'content-div-sm' : 'content-div-lg'}>
          {weatherData === 0 ? null : <MainCard className={isNavSm ? 'weather-item-sm' : 'weather-item-lg'} weatherData={weatherData} />}
          <div className={isNavSm ? 'news-item-sm' : 'news-item-lg'}>
            {newsData === 0 ? null : newsData.hits.map(item => <News title={item.title} image={item.imageUrl} content={item.content} pubDate={item.pubDate} url={item.url} />)}
          </div>
        </div>
    </div>
  )
}

export default App
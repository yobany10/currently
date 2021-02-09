import React from 'react'
import './ThreeHourCard.css'

const ThreeHourCard = props => {
    let days = {
        0: 'Sun',
        1: 'Mon',
        2: 'Tue',
        3: 'Wed',
        4: 'Thur',
        5: 'Fri',
        6: 'Sat',
      }

    // const getDay = () => {
    //     let currentDay = new Date().getDay()
    //     let weatherHour = militaryToStandard(props.time)
    //     let isNextDay = weatherHour == '12 AM' ? true : weatherHour == '3 AM' ? true : false
    //     isNextDay ? 
    //     return days[`${currentDay}`]
    //   }

    const militaryToStandard = time => {
        let sTime = time
        sTime = sTime.split(' ')
        let date = sTime[0]
        sTime = sTime[1]
        sTime = sTime.split(':')

        let hours = Number(sTime[0])

        let timeCalc

        if (hours > 0 && hours <= 12) {
          timeCalc = '' + hours
        } else if (hours > 12) {
          timeCalc = '' + (hours - 12)
        } else if (hours == 0) {
          timeCalc = '12'
        }
        
        timeCalc += (hours >= 12) ? ' PM' : ' AM'

        return timeCalc
    }

    const chooseDayColorBand = () => {
        let color = militaryToStandard(props.time) == '12 AM' ?
        'twelve-am' :
        militaryToStandard(props.time) == '3 AM' ?
        'three-am' :
        militaryToStandard(props.time) == '6 AM' ?
        'six-am' :
        militaryToStandard(props.time) == '9 AM' ?
        'nine-am' :
        militaryToStandard(props.time) == '12 PM' ?
        'twelve-pm' :
        militaryToStandard(props.time) == '3 PM' ?
        'three-pm' :
        militaryToStandard(props.time) == '6 PM' ?
        'six-pm' :
        militaryToStandard(props.time) == '9 PM' ?
        'nine-pm' : null
        return color
    }

    return (
        <div className={`three-hour-card-container ${chooseDayColorBand()}`}>
            <p className='three-hour-card-day'>Mon</p>
            <p className='three-hour-card-temp'>{props.temp}</p>
            <p className='three-hour-card-time'>{militaryToStandard(props.time)}</p>
            <p className='three-hour-card-temp'>{props.temp}</p>
            <img className='three-hour-card-img' src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`} />
            <p className='three-hour-card-weather'>{props.weather}</p>
        </div>
    )
}

export default ThreeHourCard
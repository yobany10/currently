import React from 'react'
import './News.css'

const News = props => {
    return (
        <a className='news-div' href={props.url} target='_blank' rel="noreferrer">
            <img className='news-image' src={props.image} alt={props.title}/>
            <h2 className='news-title'>{props.title}</h2>
            <p className='news-content'>{props.content}</p>
            <p className='news-date'>{props.pubDate}</p>
        </a>
    )
}

export default News
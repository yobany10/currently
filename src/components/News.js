import React from 'react'
import { useMediaQuery } from "@material-ui/core"
import image404 from '../images/404-news.jpg'
import './News.css'

const News = props => {
    // variable for using a media query
    const isNavSm = useMediaQuery('(max-width: 599px)')

    return (
        <a className={isNavSm ? 'news-div-sm' : 'news-div-lg'} href={props.url} target='_blank' rel="noreferrer">
            <img className={isNavSm ? 'news-image-sm' : 'news-image-lg'} src={props.image === "" ? image404 : props.image} alt={props.title}/>
            <h2 className='news-title'>{props.title}</h2>
            <p className='news-content'>{`${props.content.split(" ... ")[0]}...`}</p>
            <p className='news-date'>{props.pubDate}</p>
        </a>
    )
}

export default News
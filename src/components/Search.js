import React, { useState } from 'react'
import './Search.css'

const Search = props => {
    return (
        <div>
            <form className='search' autoComplete='off'>
            <input className='item-a' type='text' placeholder='city name' onChange={props.handleInput}></input>
                <button className='item-b' type='submit' onClick={props.data}>Go</button>
            </form>
        </div>
    )
}

export default Search
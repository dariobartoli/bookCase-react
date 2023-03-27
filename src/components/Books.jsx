import React from 'react'
import { Link } from 'react-router-dom'

export const Books = ({item}) => {
  return (
    <div>
        <Link to={`/view/${item.id}`} className='link__book'>
          <div className='card__container'>
            <img src={item.cover} alt={item.title} className='image__index'/>
            <p className='link__title'>{item.title}</p>
          </div>
        </Link>
    </div>
  )
}

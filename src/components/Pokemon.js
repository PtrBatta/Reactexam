import React from 'react'

function Pokemon({name, url, img}) {
  return (
    <div className='Pokemon'>
        {img &&
        <img src={img} alt={name} />
        }
        <h3>{name}</h3>
        <a href={url}>{url}</a>
    </div>
  )
}

export default Pokemon;
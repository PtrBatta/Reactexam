import React from 'react'
import { Link } from 'react-router-dom';

function Pokemon({name, url, img}) {
  console.log(JSON.stringify(name))
  return (
    <div className='Pokemon'>
        {img &&
        <img src={img} alt={name} />
        }
        <h3>{name}</h3>
        <Link to={"/search/"+ name}>{url}</Link>

    </div>
  )
}

export default Pokemon;
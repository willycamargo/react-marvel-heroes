import React from 'react'
import './style.css'

function Hero({ name, thumbnail, }) {
  return (
    <div className="Hero">
      <h5 className="Hero__title">{name}</h5>

      <figure className="Hero__figure">
        <img className="Hero__img" width={120} src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      </figure>
    </div>
  )
}

export default Hero

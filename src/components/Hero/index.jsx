import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Loader'
import './style.css'

function Hero(props) {
  const [hero, setHero] = useState({})

  useEffect(
    () => {
      const ts = import.meta.env.VITE_MARVEL_TS
      const apikey = import.meta.env.VITE_MARVEL_APIKEY
      const hash = import.meta.env.VITE_MARVEL_HASH
      const url = `https://gateway.marvel.com/v1/public/characters/${props.id}?ts=${ts}&apikey=${apikey}&hash=${hash}`
      axios.get(url).then((response) => {
        const heroData = response.data.data.results[0]
        setHero(heroData)
      })
    },
    []
  )

  return (
    <div className="Hero">
      {hero.name ? (
        <>
          <h5 className="Hero__title">{hero.name}</h5>

          <figure className="Hero__figure">
            <img className="Hero__img" width={120} src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
          </figure>
        </>
      ) : (<Loader />)}
    </div>
  )
}

export default Hero

import React, { useState, useEffect } from 'react'
import Hero from '../Hero'
import { getHeroes } from '../../utils/api'
import './style.css'

function App() {
  const [ heroes, setHeroes ] = useState([])
  const [ page, setPage ] = useState(0)
  const [ loading, setLoading ] = useState(false)

  async function fetchHeroes () {
    setLoading(true)
    const heroesResponse = await getHeroes(page)

    const heroesClone = [...heroes]
    const newHeroes = heroesClone.concat(heroesResponse.results)
    setHeroes(newHeroes)
    setLoading(false)
  }

  function handleLoadMore () {
    setPage(page+1)
  }

  useEffect(() => {
    fetchHeroes()
  }, [page])

  return (
    <div className="App">
      <div className="App__content">
        <h3 className="App__title">Lista de heróis desconhecidos</h3>

        <div className="App__heroes">
          {heroes.map((hero) => (
            <Hero key={hero.key} {...hero} />
          ))}
        </div>

        <button type="button" className="App_loadmore" onClick={handleLoadMore} disabled={loading}>
          {loading ? 'Carregando...' : 'Carregar mais'}
        </button>
      </div>

      <a className="App__attribuition" href="http://marvel.com" target="_blank">Data provided by Marvel. © 2022 MARVEL</a>
    </div>
  )
}

export default App

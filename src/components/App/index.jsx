import React from 'react'
import './style.css'
import Hero from '../Hero'

function App() {

  return (
    <div className="App">
      <div className="App__content">
        <h3 className="App__title">Lista de heróis desconhecidos</h3>

      <div className="App__heroes">
        <Hero id="1011334" />
        <Hero id="1017100" />
        <Hero id="1009144" />
        <Hero id="1009149" />
        <Hero id="1009148" />
        <Hero id="1010354" />
      </div>
      </div>

      <a className="App__attribuition" href="http://marvel.com" target="_blank">Data provided by Marvel. © 2022 MARVEL</a>
    </div>
  )
}

export default App

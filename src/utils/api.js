import axios from 'axios'

export async function getHeroes (page) {
  const ts = import.meta.env.VITE_MARVEL_TS
  const apikey = import.meta.env.VITE_MARVEL_APIKEY
  const hash = import.meta.env.VITE_MARVEL_HASH

  const quantity = 12
  const offset = page * quantity

  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${quantity}&offset=${offset}`
  const response = await axios.get(url)
  return response.data.data
}
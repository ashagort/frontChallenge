import axios from 'axios'

export default function () {
  return {
    getSearchResult
  }
}

export async function getSearchResult (query) {
  const searchURL = 'https://rickandmortyapi.com/api/character'
  let data = []

  try {
    const response = await axios.get(searchURL)
    if (response.status !== 200) {
      console.log('Error network')
      data = []
    } else {
      data = response.data
    }
  } catch (e) {
    console.error(e, 'Error network')
    return []
  }

  return data
}

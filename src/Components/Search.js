import React, { useState } from 'react'

import { getSearchResult } from './../repository'

import './Search.css'
import { SearchList } from './SearchList'

export const Search = () => {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])
  const [statusList, setStatusList] = useState('wait')
  const [statusIcon, setStatusIcon] = useState('fa-search search-icon')

  const filterResults = (results) => {
    if (results.length > 0) {
      const resultFilter = ((results.filter(item => item.name.includes(query))) && (results.filter(item => item.name.toLowerCase().indexOf(query.toLowerCase()) >= 0)))
      setResult(resultFilter)
    } else {
      setResult([])
    }
  }

  const fetchSearchResults = async (resultQuery) => {
    setStatusIcon('fa-search search-icon')

    const resultsData = await getSearchResult(resultQuery)

    if (resultsData.results) {
      filterResults(resultsData.results)
    }
  }

  const handleOnInputChange = (event) => {
    const queryTarget = event.target.value

    if (!query) {
      setQuery(queryTarget)
      setResult([])
    } else {
      setQuery(queryTarget)
      fetchSearchResults(query)
    }
  }

  const userSelectedOption = (selection) => {
    setQuery(selection)
    setStatusList('loading')
    setStatusIcon('fa-spinner')
    setResult([])
  }

  const renderResult = () => {
    if (query !== '') {
      return result.map((element, index) => {
        return (
                    <SearchList key={index} searchElement={element} selectElement={userSelectedOption} querySearch={query} />
        )
      })
    }
  }

  return (
        <div className={'search_container'}>
            {/* Search Input */}
            <p className={'search_title'}>Encuentra profesionales de confianza</p>
            <div className={`search_input_content ${statusList}`} htmlFor="search-input">
                <input
                    data-testid='search-input'
                    type="text"
                    value={query}
                    id="search-input"
                    placeholder="Qué necesitas..."
                    onChange={handleOnInputChange}
                />
                <i className={`fa ${statusIcon}`}/>
            </div>
          <ul className={'search_list'}>
            {renderResult()}
          </ul>
        </div>
  )
}

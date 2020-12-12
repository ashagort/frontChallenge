import React from 'react'

import './SearchList.css'

export const SearchList = ({ searchElement, selectElement }) => {
  return (
      <React.Fragment>
          <a href={'#'}>
      <li className={'option_list'} onClick={() => selectElement(searchElement.name)}>{searchElement.name}</li>
          </a>
      </React.Fragment>
  )
}

import React from 'react'
import Highlighter from 'react-highlight-words'

import './SearchList.css'

export const SearchList = ({ searchElement, selectElement, querySearch }) => {
  return (
      <React.Fragment>
          <a href={'#'}>
      <li className={'option_list'} onClick={() => selectElement(searchElement.name)}>
          <Highlighter
              highlightClassName="search_bold"
              searchWords={[querySearch]}
              autoEscape={true}
              textToHighlight={searchElement.name}
          />
      </li>
          </a>
      </React.Fragment>
  )
}

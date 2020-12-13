import { render, screen, cleanup, fireEvent, getByTestId } from '@testing-library/react'

import { Search } from './Search'

describe('Search component should', function () {
  let wrapper

  beforeEach(function () {
    wrapper = render(
            <Search
            />
    )
  })

  afterEach(cleanup)

  it('Search container', function () {
    const { container } = wrapper

    expect(container.getElementsByClassName('search_container')).toBeDefined()
  })

  it('User see title to search', function () {
    expect(screen.getByText('Encuentra profesionales de confianza')).toBeDefined()
  })

  it('Change value in input live search', function () {
    const { container } = wrapper
    const input = getByTestId(container, 'search-input')
    fireEvent.change(input, { target: { value: 'morty' } })
    expect(input.value).toBe('morty')
  })
})

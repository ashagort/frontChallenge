import { render } from '@testing-library/react'
import App from './App'

describe('App layout shoul', function () {
  let wrapper

  beforeEach(function () {
    wrapper = render(
      // eslint-disable-next-line react/react-in-jsx-scope
    <App />
    )
  })

  it('Input content', function () {
    const { container } = wrapper

    expect(container.getElementsByClassName('habitissimo_challenge')).toBeDefined()
  })
})

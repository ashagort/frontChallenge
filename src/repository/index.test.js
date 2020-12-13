import * as axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import repository from './index'

import { responseApi } from '../test/apiCall'

const axiosMocked = new MockAdapter(axios)

describe('Repository call API', function () {
  const query = 'morty'

  it('Retrieve data for query', async function () {
    const URL = 'https://rickandmortyapi.com/api/character'

    axiosMocked.onGet(URL).reply(200, responseApi)

    const responseApiMock = await repository().getSearchResult(query)

    expect(responseApiMock).toEqual(responseApi)
  })
})

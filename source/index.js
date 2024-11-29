import { read } from '@yurkimus/message'

export let authorization = (url, authorization) =>
  fetch(
    url,
    {
      method: 'GET',
      headers: new Headers([
        ['Authorization', authorization],
      ]),
    },
  )
    .then(read)
    .then(([response, body]) => {
      switch (response.status) {
        case 200:
          return body

        default:
          throw response
      }
    })

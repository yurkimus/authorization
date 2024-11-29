import { read } from '@yurkimus/message'

export let authorization = url => headers =>
  fetch(url, { method: 'GET', headers })
    .then(read)
    .then(([response, body]) => {
      switch (response.status) {
        case 200:
          return body

        default:
          throw response
      }
    })

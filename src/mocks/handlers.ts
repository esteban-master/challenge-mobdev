

import { rest } from 'msw'
import { data } from './data'

export const handlers = [
  rest.get('https://dog.ceo/api/breeds/list/all', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data.allBreedsList))
  }),
  rest.get('https://dog.ceo/api/breed/:id/images', (req, res, ctx) => {
    const id = req.params.id as string
    return res(ctx.status(200), ctx.json(data.images[id]))
  })
]
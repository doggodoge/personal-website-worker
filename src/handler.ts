import { Router, Request } from 'itty-router'
import { Env } from '.'

const router = Router({ base: '/api' })
const corsHeaders = { 'Access-Control-Allow-Origin': '*' }

router
  .get(
    '/posts',
    () =>
      new Response('Test', {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
  )
  .all(
    '*',
    () =>
      new Response('Not found', {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'text/plain' },
      })
  )

export const handleRequest = (request: Request, env: Env) => {
  return router.handle(request, env)
}

import { getExecutionsCount } from '@/services/projects.services'

export async function GET({ request }) {
  const url = new URL(request.url)
  const tag = url.searchParams.get('tag')
  if (!tag) {
    return new Response(JSON.stringify({ result: false, message: 'No se envio el tag' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  const data = await getExecutionsCount(tag)
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
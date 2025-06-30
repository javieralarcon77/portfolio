import { getInstanceStatus } from '@/services/projects.services'

export async function GET({ request }) {
  const url = new URL(request.url)
  const instance = url.searchParams.get('instance')
  if (!instance) {
    return new Response(JSON.stringify({ result: false, message: 'No se envio la instancia' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  const data = await getInstanceStatus(instance)
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
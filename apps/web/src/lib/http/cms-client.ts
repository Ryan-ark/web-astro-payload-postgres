import { publicEnv } from '@/lib/env/public-env'

type QueryValue = string | number | boolean | undefined

const buildQueryString = (params: Record<string, QueryValue>) => {
  const searchParams = new URLSearchParams()

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      searchParams.set(key, String(value))
    }
  }

  const query = searchParams.toString()
  return query ? `?${query}` : ''
}

export async function cmsFetch<T>(path: string, params: Record<string, QueryValue> = {}): Promise<T> {
  const response = await fetch(`${publicEnv.PUBLIC_CMS_URL}${path}${buildQueryString(params)}`, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`CMS request failed with status ${response.status}`)
  }

  return response.json() as Promise<T>
}

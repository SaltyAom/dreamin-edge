import { Dreamin } from '../store/dreamin/types'

export default async (...args: string[]): Promise<Dreamin[]> => {
    if (typeof window === 'undefined') return []

    const fetch = await require('isomorphic-unfetch')

    const response = await fetch(args[0], {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({
            operationName: args[1],
            query: args[2],
            variables: []
        })
    })

    const data = await response.json()

    return data.data[args[1]] as Dreamin[]
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Dreamin } from '../store/dreamin/types'

const getMenu = async (
    operationName: string,
    host: string,
    query: string
): Promise<Dreamin[]> => {
    if (typeof window === 'undefined') return []

    const fetch = await require('isomorphic-unfetch')

    const response = await fetch(host, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({
            operationName,
            query,
            variables: []
        })
    })

    const { data } = await response.json()

    return data[operationName] as Dreamin[]
}

export default getMenu

import { Dreamin } from '../dreamin/types'

export interface OrderStore {
    order: Dreamin[]
}

export interface OrderEvent {
    UPDATE_ORDER: {
        name: string
        price: number
    }
}

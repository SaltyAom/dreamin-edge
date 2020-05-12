import { Dreamin } from "../dreamin/types"

export interface OrderStore {
    order: Dreamin[]
}

export interface OrderEvent {
    'UPDATE_ORDER': Dreamin
}
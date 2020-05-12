export interface OrderStore {
    order: Array<{
        name: string
        price: number
    }>
}

export interface OrderEvent {
    UPDATE_ORDER: {
        name: string
        price: number
    }
}

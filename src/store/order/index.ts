import { StoreonModule } from 'storeon'

import { OrderStore, OrderEvent } from './types'

const order: StoreonModule<OrderStore, OrderEvent> = (store) => {
    store.on('@init', () => ({ order: [] }))

    store.on('UPDATE_ORDER', (store, order) => ({
        order: [...store.order, order]
    }))

    store.on('REMOVE_ORDER', ({ order }, toBeRemove) => ({
        order: order.filter((_, index) => index !== toBeRemove)
    }))
}

export default order

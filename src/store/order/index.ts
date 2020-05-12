import { StoreonModule } from 'storeon'

import { OrderStore, OrderEvent } from './types'

const order: StoreonModule<OrderStore, OrderEvent> = (store) => {
    store.on('@init', () => ({ order: [] }))

    store.on('UPDATE_ORDER', (store, order) => ({
        order: [...store.order, order]
    }))
}

export default order

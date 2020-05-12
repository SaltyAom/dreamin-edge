import { StoreonStore } from "storeon"

import { OrderStore, OrderEvent } from "./types"

const order = (store: StoreonStore<OrderStore, OrderEvent>) => {
    store.on("@init", () => ({ order: [] }))

    store.on("UPDATE_ORDER", (store, order) => ({
        order: [...store.order, order]
    }))
}

export default order

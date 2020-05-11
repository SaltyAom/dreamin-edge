import { createStoreon } from "storeon"

const dreamin = (store) => {
    store.on("@init", () => ({ dreamin: {} }))

    store.on("UPDATE_MENU", (store, dreamin) => ({
        dreamin
    }))
}

const order = (store) => {
    store.on("@init", () => ({ order: [] }))

    store.on("UPDATE_ORDER", (store, order) => ({
        order: [...store.order, order]
    }))
}

const store = createStoreon([dreamin, order])
export default store

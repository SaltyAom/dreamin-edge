import { createStoreon } from "storeon"

const dreamin = (store) => {
    store.on("@init", () => ({ dreamin: {} }))

    store.on("UPDATE_MENU", (store, dreamin) => ({
        dreamin
    }))
}

const store = createStoreon([dreamin])
export default store

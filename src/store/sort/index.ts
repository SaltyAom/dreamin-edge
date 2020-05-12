import { StoreonStore } from "storeon"

import { SortStore, SortEvent, SortBy, SortOrder } from "./types"

const sort = (store: StoreonStore<SortStore, SortEvent>) => {
    store.on("@init", () => ({ sort: { by: "index", order: "asc" } }))

    store.on("UPDATE_SORT_BY", (store, by: SortBy) => ({
        sort: { ...store.sort, by }
    }))

    store.on("UPDATE_SORT_ORDER", (store, order: SortOrder) => ({
        sort: { ...store.sort, order }
    }))
}

export default sort
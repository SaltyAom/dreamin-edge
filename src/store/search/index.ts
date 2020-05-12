import { StoreonStore } from "storeon"

import { SearchStore, SearchEvent } from "./types"

const search = (store: StoreonStore<SearchStore, SearchEvent>) => {
    store.on("@init", () => ({ search: "" }))

    store.on("UPDATE_SEARCH", (store, search) => ({
        search
    }))
}

export default search

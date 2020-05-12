import { StoreonStore } from 'storeon'

import { DreaminState, DreaminEvent } from './types'

const dreamin = (store: StoreonStore<DreaminState, DreaminEvent>) => {
    store.on("@init", () => ({ dreamin: [] }))

    store.on("UPDATE_MENU", (store, dreamin) => ({
        dreamin
    }))
}

export default dreamin
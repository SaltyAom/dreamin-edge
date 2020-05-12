import { StoreonModule } from 'storeon'

import { SortStore, SortEvent, SortBy, SortOrder } from './types'

const sort: StoreonModule<SortStore, SortEvent> = (store) => {
    store.on('@init', () => ({ sort: { by: 'index', order: 'asc' } }))

    store.on('UPDATE_SORT_BY', (store, by: SortBy) => ({
        sort: { ...store.sort, by }
    }))

    store.on('UPDATE_SORT_ORDER', (store, order: SortOrder) => ({
        sort: { ...store.sort, order }
    }))
}

export default sort

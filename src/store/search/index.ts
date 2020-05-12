import { StoreonModule } from 'storeon'

import { SearchStore, SearchEvent } from './types'

const search: StoreonModule<SearchStore, SearchEvent> = (store) => {
    store.on('@init', () => ({ search: '' }))

    store.on('UPDATE_SEARCH', (store, search) => ({
        search
    }))
}

export default search

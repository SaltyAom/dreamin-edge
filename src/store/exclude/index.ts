import { StoreonModule } from 'storeon'

import { ExcludeStore, ExcludeEvent } from './types'

const exclude: StoreonModule<ExcludeStore, ExcludeEvent> = (store) => {
    store.on('@init', () => ({ exclude: [] }))

    store.on('TOGGLE_EXCLUDE', ({ exclude }, order) => ({
        exclude: exclude.includes(order)
            ? exclude.filter((menu) => menu !== order)
            : [...exclude, order]
    }))

    store.on('REARRANGE_EXCLUDE_FROM', (store, index) => {
        let exclude = store.exclude

        exclude.splice(index, 1)

        return { exclude }
    })
}

export default exclude

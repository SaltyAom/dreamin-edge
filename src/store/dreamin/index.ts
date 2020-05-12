import { StoreonModule } from 'storeon'

import { DreaminStore, DreaminEvent } from './types'

const dreamin: StoreonModule<DreaminStore, DreaminEvent> = (store) => {
    store.on('@init', () => ({ dreamin: [] }))

    store.on('UPDATE_MENU', (store, dreamin) => ({
        dreamin
    }))
}

export default dreamin

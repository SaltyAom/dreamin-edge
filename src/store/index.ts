import { createStoreon } from 'storeon'

import dreamin from './dreamin'
import order from './order'
import search from './search'
import sort from './sort'
import exclude from './exclude'

const store = createStoreon<any>([dreamin, order, search, sort, exclude])
export default store

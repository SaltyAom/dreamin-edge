import { createStoreon } from "storeon"

import dreamin from './dreamin'
import order from './order'
import search from './search'
import sort from './sort'

const store = createStoreon([dreamin, order, search, sort])
export default store

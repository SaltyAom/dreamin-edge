import { Dreamin } from '../store/dreamin/types'

const applySort = (
    list: Dreamin[],
    sort: { by: 'index' | 'price'; order: 'asc' | 'desc' }
): Dreamin[] => {
    let menuList: Dreamin[] = list

    switch (true) {
        case sort.by === 'index' && sort.order === 'desc':
            menuList = menuList.reverse()
            break

        case sort.by === 'price' && sort.order === 'asc':
            menuList = menuList.sort((a, b) => a.price - b.price)
            break

        case sort.by === 'price' && sort.order === 'desc':
            menuList = menuList.sort((a, b) => b.price - a.price)
            break

        default:
            break
    }

    return menuList
}

export default applySort

import { Dreamin } from '../store/dreamin/types'

const filterSearch = (dreamin: Dreamin[], search: string): Dreamin[] =>
    dreamin.filter(({ subMenu, name }) =>
        search.length
            ? subMenu !== null
                ? subMenu.some((menu: string) => menu.includes(search))
                : (name as { th: string; en: string; jp: string }).th
                      .toLocaleLowerCase()
                      .includes(search) ||
                  (name as { th: string; en: string; jp: string }).en
                      .toLocaleLowerCase()
                      .includes(search) ||
                  (name as { th: string; en: string; jp: string }).jp
                      .toLocaleLowerCase()
                      .includes(search)
            : true
    )

export default filterSearch

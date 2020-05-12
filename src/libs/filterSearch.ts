const filterSearch = (dreamin: any[], search: string) =>
    dreamin.filter(({ subMenu, name }) =>
        search.length
            ? subMenu !== null
                ? subMenu.some((menu: string) => menu.includes(search))
                : name.th.toLocaleLowerCase().includes(search) ||
                  name.en.toLocaleLowerCase().includes(search) ||
                  name.jp.toLocaleLowerCase().includes(search)
            : true
    )

export default filterSearch

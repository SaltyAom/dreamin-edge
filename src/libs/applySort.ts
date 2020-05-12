const applySort = (
    list: Array<{ price: number }>,
    sort: { by: "index" | "price"; order: "asc" | "desc" }
) => {
    let menuList = list

    switch (true) {
        case sort.by === "index" && sort.order === "desc":
            menuList = menuList.reverse()
            break

        case sort.by === "price" && sort.order === "asc":
            menuList = menuList.sort((a, b) => a.price - b.price)
            break

        case sort.by === "price" && sort.order === "desc":
            menuList = menuList.sort((a, b) => b.price - a.price)
            break

        default:
            break
    }

    return menuList
}

export default applySort
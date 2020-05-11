import { useState } from "preact/hooks"

import { useStoreon } from "storeon/preact"

import Card from "../component/card"
import Search from "../component/search"
import Sort from "../component/sort"

import "../styles/menu-list.styl"

const Index = () => {
    let [search, updateSearch] = useState(""),
        [sort, updateSort] = useState({
            by: "index",
            order: "asc"
        })

    let { dreamin } = useStoreon("dreamin")

    if (!dreamin.length)
        return (
            <Fragment>
                <Search {...{ updateSearch }} />
                <Sort {...{ sort, updateSort }} />
                <ul id="menu-list">
                    <li id="menu-fetch">
                        <img
                            class="illust"
                            src="/assets/illustrations/loading.svg"
                            alt="Loading"
                        />
                        <h2 class="title">Downloading data...</h2>
                        <p class="detail">Thanks for your patient!</p>
                    </li>
                </ul>
            </Fragment>
        )

    let menuList = dreamin.filter(({ subMenu, name }) =>
        search.length
            ? subMenu !== null
                ? subMenu.some((menu) => menu.includes(search))
                : name.th.toLocaleLowerCase().includes(search) ||
                  name.en.toLocaleLowerCase().includes(search) ||
                  name.jp.toLocaleLowerCase().includes(search)
            : true
    )

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

    if (!menuList.length)
        return (
            <Fragment>
                <Search {...{ updateSearch }} />
                <Sort {...{ sort, updateSort }} />
                <ul id="menu-list">
                    <li id="menu-fetch">
                        <img
                            class="illust"
                            src="/assets/illustrations/not_found.svg"
                            alt="NoT found"
                        />
                        <h1 class="title">Not Found</h1>
                        <p class="detail">Maybe try other keyword?</p>
                    </li>
                </ul>
            </Fragment>
        )

    return (
        <Fragment>
            <Search {...{ updateSearch }} />
            <Sort {...{ sort, updateSort }} />
            <ul id="menu-list">
                {menuList.map(({ name, subMenu, price }) => (
                    <Card
                        key={`${
                            subMenu !== null
                                ? subMenu[0]
                                : `${name.th}-${name.jp}`
                        }-${price}`}
                        name={
                            name === null
                                ? subMenu
                                : [name.th, name.en, name.jp]
                        }
                        option={
                            name === null ? [subMenu[1]] : [name.en, name.jp]
                        }
                        price={price}
                    />
                ))}
            </ul>
        </Fragment>
    )
}

export default Index

import { useState } from "preact/hooks"

import { useStoreon } from "storeon/preact"

import Card from "../component/card"
import Serach from "../component/search"
import NoData from "../component/illustrations/no_data"

import "../styles/menu-list.styl"

const Index = () => {
    let [search, updateSearch] = useState("")

    let { dreamin } = useStoreon("dreamin")

    if (!dreamin.length)
        return (
            <Fragment>
                <Serach {...{ updateSearch }} />
                <ul id="menu-list">
                    <h1>Searching</h1>
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

    if (!menuList.length)
        return (
            <Fragment>
                <Serach {...{ updateSearch }} />
                <ul id="menu-list">
                    <li class="not-found">
                        <article class="article">
                            <NoData />
                            <h1 class="title">Nothing found</h1>
                        </article>
                    </li>
                </ul>
            </Fragment>
        )

    return (
        <Fragment>
            <Serach {...{ updateSearch }} />
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

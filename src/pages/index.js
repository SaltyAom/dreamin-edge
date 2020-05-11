import { useState } from "preact/hooks"

import { useStoreon } from "storeon/preact"

import Card from "../component/card"
import Serach from "../component/search"

import "../styles/menu-list.styl"

const Index = () => {
    let [search, updateSearch] = useState("")

    let { dreamin } = useStoreon("dreamin")

    if (!dreamin.length)
        return (
            <Fragment>
                <Serach {...{ updateSearch }} />
                <ul id="menu-list">
                    <li id="menu-fetch">
                        <img class="illust" src='/assets/illustrations/loading.svg' alt="Loading" />
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

    if (!menuList.length)
        return (
            <Fragment>
                <Serach {...{ updateSearch }} />
                <ul id="menu-list">
                    <li id="menu-fetch">
                        <img class="illust" src='/assets/illustrations/not_found.svg' alt="NoT found" />
                        <h1 class="title">Not Found</h1>
                        <p class="detail">Maybe try other keyword?</p>
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

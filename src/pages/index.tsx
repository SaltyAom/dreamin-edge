import { useState } from "preact/hooks"

import { useStoreon } from "storeon/preact"

import Card from "../component/card"

import filterSearch from "../libs/filterSearch"
import applySort from "../libs/applySort"

import "../styles/menu-list.styl"

const Index = () => {
    let { search } = useStoreon("search"),
        { sort } = useStoreon("sort"),
        { dreamin } = useStoreon("dreamin")

    if (!dreamin.length)
        return (
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
        )

    let menuList = applySort(filterSearch(dreamin, search), sort)

    if (!menuList.length)
        return (
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
        )

    return (
        <ul id="menu-list">
            {menuList.map(({ name, subMenu, price }) => (
                <Card
                    key={
                        name === null
                            ? subMenu[0]
                            : `${name.th}-${name.jp}-${price}`
                    }
                    name={name === null ? subMenu : [name.th, name.en, name.jp]}
                    price={price}
                />
            ))}
        </ul>
    )
}

export default Index

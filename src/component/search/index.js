import { useRef } from "preact/hooks"

import { Link } from "wouter"
import useLocation from "wouter/use-location"

import SearchIcon from "./assets/search"
import CoffeeIcon from "./assets/coffee"

import "./search.styl"

const Search = ({ updateSearch }) => {
    let [path] = useLocation()

    let search = useRef("")

    if (path !== "/")
        return (
            <section id="search">
                <Link href="/">
                    <a class="route">
                        <SearchIcon />
                    </a>
                </Link>
                <header class="order-list -disabled">
                    <CoffeeIcon />
                    <h3 class="title">Menu List</h3>
                </header>
            </section>
        )

    let handleSearch = (event) => {
        let value = event.target.value.toLowerCase()

        search.current = value

        setTimeout(() => {
            if (search.current === value) updateSearch(value)
        }, 275)
    }

    return (
        <section id="search">
            <SearchIcon />
            <input
                class="search"
                type="text"
                placeholder="Search Menu"
                onInput={handleSearch}
            />
            <Link href="/order">
                <a class="order-list">
                    <CoffeeIcon />
                </a>
            </Link>
        </section>
    )
}

export default Search

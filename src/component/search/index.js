import { useRef } from "preact/hooks"

import { Link } from "wouter"

import SearchIcon from "./assets/search"
import CoffeeIcon from "./assets/coffee"

import "./search.styl"

const Search = ({ updateSearch }) => {
    let search = useRef("")

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

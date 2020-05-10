import { useRef } from "preact/hooks"

import SearchIcon from "./assets/search"

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
        </section>
    )
}

export default Search

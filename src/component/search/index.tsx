import { h } from 'preact'
import { useRef } from 'preact/hooks'

import { Link } from 'wouter'

import { useStoreon } from 'storeon/preact'

import SearchIcon from './assets/search'
import CoffeeIcon from './assets/coffee'

import { SearchStore, SearchEvent } from '../../store/search/types'

import './search.styl'

const Search = ({ withSearch = false }) => {
    let { dispatch } = useStoreon<SearchStore, SearchEvent>('search')

    let search = useRef('')

    if (!withSearch)
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

    let handleSearch = (event: any) => {
        let value = event.target.value.toLowerCase()

        search.current = value

        setTimeout(() => {
            if (search.current === value) dispatch('UPDATE_SEARCH', value)
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
                aria-label="Search menu"
            />
            <Link href="/order">
                <a class="order-list" aria-label="Order list">
                    <CoffeeIcon />
                </a>
            </Link>
        </section>
    )
}

export default Search

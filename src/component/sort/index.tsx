import { useReducer, useCallback } from "preact/hooks"

import SortWith from './sortWith'

import "./sort.styl"

const Sort = () => {
    let [isOpen, toggleOpen] = useReducer((state) => !state, false)

    return (
        <section id="sort">
            <button
                class={`toggler ${isOpen ? "-active" : ""}`}
                onClick={toggleOpen}
                aria-label="Sort options"
            >
                <img
                    class="icon"
                    src="/assets/icons/notes.svg"
                    alt="Toggle Icon"
                />
                Sort
            </button>
            <article class={`controller ${!isOpen ? "-close" : ""}`}>
                <section class="row">
                    <SortWith type="by" value="index">Order</SortWith>
                    <SortWith type="by" value="price">Price</SortWith>
                </section>
                <section class="row">
                    <SortWith type="order" value="asc">Ascending</SortWith>
                    <SortWith type="order" value="desc">Descending</SortWith>
                </section>
            </article>
        </section>
    )
}

export default Sort

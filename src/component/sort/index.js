import { useReducer, useCallback } from "preact/hooks"

import "./sort.styl"

const Sort = ({ sort, updateSort }) => {
    let [isOpen, toggleOpen] = useReducer((state) => !state, false)

    let activeWhen = useCallback(
        (key, is) => (sort[key] === is ? "-active" : ""),
        [sort]
    )

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
                    <button
                        class={`toggler ${activeWhen("by", "index")}`}
                        onClick={() =>
                            updateSort({
                                ...sort,
                                by: "index"
                            })
                        }
                    >
                        Order
                    </button>
                    <button
                        class={`toggler ${activeWhen("by", "price")}`}
                        onClick={() =>
                            updateSort({
                                ...sort,
                                by: "price"
                            })
                        }
                    >
                        Price
                    </button>
                </section>
                <section class="row">
                    <button
                        class={`toggler ${activeWhen("order", "asc")}`}
                        onClick={() =>
                            updateSort({
                                ...sort,
                                order: "asc"
                            })
                        }
                    >
                        Ascending
                    </button>
                    <button
                        class={`toggler ${activeWhen("order", "desc")}`}
                        onClick={() =>
                            updateSort({
                                ...sort,
                                order: "desc"
                            })
                        }
                    >
                        Descending
                    </button>
                </section>
            </article>
        </section>
    )
}

export default Sort

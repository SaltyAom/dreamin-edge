import { useState, useCallback } from "preact/hooks"

import "./card.styl"

const Card = ({ name, price }) => {
    let [selected, updateSelected] = useState(name[0])

    let select = useCallback((event) => {
        updateSelected(event.target.textContent)
    }, [])

    return (
        <li class="list">
            <article class="card">
                <header class="detail">
                    <h3 class="name">{selected}</h3>
                    <p class="price">{price}฿</p>
                </header>
                <footer class="option">
                    {name
                        .filter((name) => name !== selected)
                        .map((name) => (
                            <button
                                key={name}
                                class="name"
                                onClick={select}
                            >
                                {name}
                            </button>
                        ))}
                </footer>
            </article>
        </li>
    )
}

export default Card

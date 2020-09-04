import { h } from 'preact'
import { useState, useCallback } from 'preact/hooks'

import { useStoreon } from 'storeon/preact'

import CardComponent from './types'
import { OrderStore, OrderEvent } from '../../store/order/types'

import './card.styl'

const Card: CardComponent = ({ name = [], price = 0, preload, index }) => {
    let [selected, updateSelected] = useState(name[0])

    let { dispatch } = useStoreon<OrderStore, OrderEvent>('order')

    let select = useCallback((event: MouseEvent) => {
        let { textContent } = event.target as HTMLButtonElement

        updateSelected(textContent)
    }, [])

    let addOrder = useCallback(
        () => dispatch('UPDATE_ORDER', { name: selected, price }),
        [dispatch, selected, price]
    )

    let animationDuration = index < 25 ? `${index * 0.1 + 0.15}s` : ''

    if (preload)
        return (
            <li class="list">
                <article class="card -preload" style={{ animationDuration }}>
                    <header class="detail">
                        <h3 class="name" />
                        <p class="price" />
                    </header>
                    <aside class="option">
                        <button class="name" />
                        <button class="name" />
                    </aside>

                    <footer class="function">
                        <section class="balloon" />
                    </footer>
                </article>
            </li>
        )

    return (
        <li class="list">
            <article class="card" style={{ animationDuration }}>
                <header class="detail">
                    <h3 class="name">{selected}</h3>
                    <p class="price">
                        {price.toLocaleString('th', {
                            maximumFractionDigits: 0
                        })}
                    </p>
                </header>
                <aside class="option">
                    {name
                        .filter((name) => name !== selected && name.length)
                        .map((name) => (
                            <button key={name} class="name" onClick={select}>
                                {name}
                            </button>
                        ))}
                </aside>

                <footer class="function">
                    <section class="balloon">
                        <button class="action" onClick={addOrder}>
                            <img class="icon" src="/assets/icons/bag.svg" />
                            Order
                        </button>
                    </section>
                </footer>
            </article>
        </li>
    )
}

export default Card

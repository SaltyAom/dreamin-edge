import { h } from 'preact'
import { useState, useCallback } from 'preact/hooks'
import { memo } from 'preact/compat'

import { useStoreon } from 'storeon/preact'

import { OrderStore, OrderEvent } from '../../store/order/types'

import CardComponent, { CardProps } from './types'

import './card.styl'

const memoize = (prev: CardProps, next: CardProps) =>
    prev.name.reduce((prev, current) => prev + current) ===
    next.name.reduce((prev, current) => prev + current)

const Card: CardComponent = memo(({ name = [], price = 0, preload, index }) => {
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
                <div className="wrapper">
                    <article
                        class="card -preload"
                        style={{ animationDuration }}
                    >
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
                </div>
                <footer class="function">
                    <section class="balloon">
                        <button class="action" onClick={addOrder}>
                            <img class="icon" src="/assets/icons/bag.svg" />
                            Order
                        </button>
                    </section>
                </footer>
            </li>
        )

    return (
        <li class="list">
            <div className="wrapper">
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
                                <button
                                    key={name}
                                    class="name"
                                    onClick={select}
                                >
                                    {name}
                                </button>
                            ))}
                    </aside>
                </article>
            </div>
            <footer class="function">
                <section class="balloon">
                    <button class="action" onClick={addOrder}>
                        <img class="icon" src="/assets/icons/bag.svg" />
                        Order
                    </button>
                </section>
            </footer>
        </li>
    )
}, memoize)

export default Card

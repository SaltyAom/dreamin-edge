import { h } from 'preact'
import { useState, useEffect, useRef, useCallback } from 'preact/hooks'

import { useStoreon } from 'storeon/preact'

import { OrderEvent, OrderStore } from '../../store/order/types'

import './snackbar.styl'

const Snackbar = () => {
    let { order } = useStoreon<OrderStore, OrderEvent>('order')

    let [isShowing, showSnackbar] = useState(false),
        queue = useRef<{ name: string; price: number }[]>([])

    useEffect(() => {
        if (!Object.keys(order).length) return

        queue.current.push(order[order.length - 1])
        handleQueue()
    }, [order])

    let handleQueue = useCallback(() => {
        if (!queue.current.length || isShowing) return

        showSnackbar(true)
        setTimeout(() => {
            showSnackbar(false)
            queue.current.shift()

            requestAnimationFrame(() => {
                handleQueue()
            })
        }, 5500)
    }, [isShowing])

    if (!isShowing || !order.length || !queue.current[0].name) return null

    return (
        <section id="snackbar">
            <h2 class="title">
                <span class="order">{queue.current[0].name}</span> has been
                added to order.
            </h2>
        </section>
    )
}

export default Snackbar

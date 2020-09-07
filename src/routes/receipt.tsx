import { h } from 'preact'
import { useMemo } from 'preact/hooks'

import { useStoreon } from 'storeon/preact'

import { Row } from '../component/receipt'

import { OrderStore, OrderEvent } from 'store/order/types'
import { ExcludeStore, ExcludeEvent } from 'store/exclude/types'

import '../styles/receipt.styl'

const Receipt = () => {
    let { exclude } = useStoreon<ExcludeStore, ExcludeEvent>('exclude')
    let { order } = useStoreon<OrderStore, OrderEvent>('order')

    let menu = useMemo(
            () => order.filter((_, index) => !exclude.includes(index)),
            [order]
        ),
        price = useMemo(
            () => menu.reduce((order, { price }) => order + price, 0),
            [order]
        ),
        serviceCharge = useMemo(
            () => menu.reduce((order, { price }) => order + price * 0.1, 0),
            [order]
        ),
        summary = useMemo(() => price + serviceCharge, [order])

    return (
        <table id="receipt">
            <thead class="header">
                <tr class="row">
                    <td class="data name">Order</td>
                    <td class="data price">Price (฿)</td>
                </tr>
            </thead>
            <tbody class="table">
                {order.map(({ name, price }, index) => (
                    <Row key={index} {...{ name, price, index }} withRemove />
                ))}

                <Row name="Summary" price={price} withBorder />
                <Row name="Service Charge" price={serviceCharge} />

                <Row name="Total" price={summary} withBorder />
            </tbody>
        </table>
    )
}

export default Receipt

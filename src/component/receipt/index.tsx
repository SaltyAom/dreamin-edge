import { h, FunctionComponent } from 'preact'
import { useStoreon } from 'storeon/preact'

import Row from './row'

import { OrderStore, OrderEvent } from '../../store/order/types'

import './receipt.styl'

const Receipt: FunctionComponent<{}> = () => {
    const { order } = useStoreon<OrderStore, OrderEvent>('order')

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
                    <Row key={index} {...{ name, price }} />
                ))}

                <Row
                    name="Summary"
                    price={order.reduce((t, { price }) => t + price, 0)}
                    withBorder
                />
                <Row
                    name="Service Charge"
                    price={order.reduce(
                        (t, { price }) => t * 0.1 + price * 0.1,
                        0
                    )}
                />

                <Row
                    name="Total"
                    price={order.reduce(
                        (t, { price }) => t * 1.1 + price * 1.1,
                        0
                    )}
                    withBorder
                />
            </tbody>
        </table>
    )
}

export default Receipt

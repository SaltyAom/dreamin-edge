import { h, FunctionComponent } from 'preact'
import { useStoreon } from 'storeon/preact'

import { OrderStore, OrderEvent } from '../store/order/types'

import '../styles/order.styl'

const Order: FunctionComponent<{}> = () => {
    const { order } = useStoreon<OrderStore, OrderEvent>('order')

    return (
        <table id="order">
            <thead class="header">
                <tr class="row">
                    <td class="data name">Order</td>
                    <td class="data price">Price (฿)</td>
                </tr>
            </thead>
            <tbody class="table">
                {/* Order List */}
                {order.map(({ name, price }, index) => (
                    <tr key={index} class="row">
                        <td class="data name">{name}</td>
                        <td class="data price">{price}</td>
                    </tr>
                ))}

                {/* Summary */}
                <tr class="row summary">
                    <td class="data name">Sum</td>
                    <td class="data price">
                        {order.length
                            ? order
                                  .reduce((t, { price }) => t + price, 0)
                                  .toLocaleString('th', {
                                      maximumFractionDigits: 0
                                  })
                            : 0}
                    </td>
                </tr>

                {/* Service Charge */}
                <tr class="row">
                    <td class="data name">Service Charge</td>
                    <td class="data price">
                        {order.length
                            ? order
                                  .reduce(
                                      (t, { price }) => t * 0.1 + price * 0.1,
                                      0
                                  )
                                  .toLocaleString('th', {
                                      maximumFractionDigits: 0
                                  })
                            : 0}
                    </td>
                </tr>

                {/* Total */}
                <tr class="row summary">
                    <td class="data name">Total</td>
                    <td class="data price">
                        {order.length
                            ? order
                                  .reduce(
                                      (t, { price }) => t * 1.1 + price * 1.1,
                                      0
                                  )
                                  .toLocaleString('th', {
                                      maximumFractionDigits: 0
                                  })
                            : 0}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Order

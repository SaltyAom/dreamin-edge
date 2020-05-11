import { Fragment } from "preact"

import { useStoreon } from "storeon/preact"

const Order = () => {
    let { order } = useStoreon("order")

    return (
        <Fragment>
            <h1>Hello World</h1>
            <ul>
                {order.map(({ name, price }) => (
                    <li>
                        {name}
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default Order

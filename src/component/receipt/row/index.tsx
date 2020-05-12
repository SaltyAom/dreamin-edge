import { h } from 'preact'

import RowComponent from './types'

const Row: RowComponent = ({ name, price, withBorder = false }) => (
    <tr class={`row ${withBorder ? '-border' : ''}`}>
        <td class="data name">{name}</td>
        <td class="data price">
            {price.toLocaleString('th', {
                maximumFractionDigits: 0
            })}
        </td>
    </tr>
)

export default Row

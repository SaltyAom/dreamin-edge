import { h } from 'preact'

import { useStoreon } from 'storeon/preact'

import { OrderStore, OrderEvent } from 'store/order/types'
import { ExcludeStore, ExcludeEvent } from 'store/exclude/types'

import RowComponent from './types'
import { useCallback } from 'preact/hooks'

const Row: RowComponent = ({
    name,
    price,
    index = -1,
    withBorder = false,
    withRemove = false
}) => {
    let { exclude, dispatch: excludeDispatch } = useStoreon<
            ExcludeStore,
            ExcludeEvent
        >('exclude'),
        { dispatch: orderDispatch } = useStoreon<OrderStore, OrderEvent>(
            'order'
        )

    let toggleExclude = useCallback(
            (event: Event) => {
                let { nodeName } = event.target as HTMLElement,
                    blacklist = ['BUTTON', 'IMG']

                if (withRemove && !blacklist.includes(nodeName))
                    excludeDispatch('TOGGLE_EXCLUDE', index)
            },
            [withRemove, index, excludeDispatch]
        ),
        removeOrder = useCallback(() => {
            orderDispatch('REMOVE_ORDER', index)
            excludeDispatch('TOGGLE_EXCLUDE', index)
            excludeDispatch('REARRANGE_EXCLUDE_FROM', index)
        }, [index, orderDispatch, excludeDispatch])

    return (
        <tr
            onClick={toggleExclude}
            tabIndex={withRemove ? 1 : 0}
            class={`row ${withBorder ? '-border' : ''} ${
                exclude.includes(index) ? '-disabled' : ''
            }`}
        >
            <td class={`data name ${withRemove ? '-remove' : ''}`}>
                {withRemove ? (
                    <button class="remove" onClick={removeOrder}>
                        <img src="/assets/icons/remove.svg" />
                    </button>
                ) : null}{' '}
                <span class="order">{name}</span>
            </td>
            <td class="data price">
                {price.toLocaleString('th', {
                    maximumFractionDigits: 0
                })}
            </td>
        </tr>
    )
}

export default Row

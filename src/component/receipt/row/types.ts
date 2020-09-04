import { FunctionComponent } from 'preact'

interface RowProps {
    name: string
    price: number
    index?: number
    withBorder?: boolean
    withRemove?: boolean
}

type RowComponent = FunctionComponent<RowProps>
export default RowComponent

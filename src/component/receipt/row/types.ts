import { FunctionComponent } from 'preact'

interface RowProps {
    name: string
    price: number
    withBorder?: boolean
}

type RowComponent = FunctionComponent<RowProps>
export default RowComponent

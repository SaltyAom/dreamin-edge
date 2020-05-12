import { FunctionComponent, VNode } from 'preact'

interface SortWithProps {
    children: string | VNode
    type: 'by' | 'order'
    value: 'asc' | 'desc' | 'index' | 'price'
}

type SortWithComponent = FunctionComponent<SortWithProps>
export default SortWithComponent

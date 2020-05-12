import { FunctionComponent, VNode } from 'preact'

interface DataProviderProps {
    children: VNode
}

type DataProviderComponent = FunctionComponent<DataProviderProps>
export default DataProviderComponent

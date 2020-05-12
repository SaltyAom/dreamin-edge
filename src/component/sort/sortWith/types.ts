import { FunctionComponent, VNode } from "preact"

interface SortWithProps {
    children: VNode
    type: "BY" | "ORDER" 
    value: "asc" | "desc" | "index" | "price"
}

type SortWithComponent = FunctionComponent<SortWithProps>
export default SortWithComponent
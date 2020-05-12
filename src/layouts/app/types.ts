import { FunctionComponent, VNode } from "preact"

interface AppLayoutsProps {
    children: VNode
    withSort?: boolean
}

type AppLayoutComponent = FunctionComponent<AppLayoutsProps>
export default AppLayoutComponent

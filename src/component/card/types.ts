import { FunctionComponent } from 'preact'

interface CardProps {
    name: string[]
    price: number
    preload?: false
    index: number
}
interface PreloadCardProps {
    name?: string[]
    price?: number
    preload: true
    index: number
}

type CardComponent = FunctionComponent<CardProps | PreloadCardProps>
export default CardComponent

import { FunctionComponent } from 'preact'

interface CardProps {
    name: string[]
    price: number
}

type CardComponent = FunctionComponent<CardProps>
export default CardComponent